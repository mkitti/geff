import zarr
import networkx as nx
from pathlib import Path
# from geff import __version
from typing import Optional
import warnings
import numpy as np

def get_roi(graph: nx.Graph, position_attr: str) -> tuple[tuple[float, ...], tuple[float, ...]]:
    _min = None
    _max = None
    for _, data in graph.nodes(data=True):
        pos = np.array(data[position_attr])
        if _min is None:
            _min = pos
            _max = pos
        else:
            _min = np.min([_min, pos], axis=0)
            _max = np.max([_max, pos], axis=0)
    
    return tuple(_min.tolist()), tuple(_max.tolist())

def get_node_attrs(graph: nx.Graph) -> list[str]:
    return list({k for n in graph.nodes for k in graph.nodes[n]})

def get_edge_attrs(graph: nx.Graph) -> list[str]:
    return list({k for e in graph.edges for k in graph.edges[e]})


            

def write(
    graph: nx.Graph,
    position_attr: str,
    path: str | Path,
    axis_names: Optional[list[str]] = None,
    axis_units: Optional[list[str]] = None,
):
    if nx.is_empty(graph):
        warnings.warn(f"Graph is empty - not writing anything to {path}")
        return
    # open/create zarr container
    group = zarr.open(path, "a")

    # write meta-data
    # group.attrs["geff_spec"] = __version
    group.attrs["position_attr"] = position_attr
    group.attrs["directed"] = isinstance(graph, nx.DiGraph)
    group.attrs["roi"] = get_roi(graph, position_attr=position_attr)
    if axis_names:
        graph.attrs["axis_names"] = axis_names
    if axis_units:
        graph.attrs["axis_units"] = axis_units

    # get node and edge IDs
    nodes_list = list(graph.nodes())
    nodes_arr = np.array(nodes_list)
    edges_list = list(graph.edges())
    edges_arr = np.array(edges_list)

    # write nodes
    group["nodes/ids"] = nodes_arr

    # write node attributes
    for name in get_node_attrs(graph):
        print(nodes_list)
        # TODO: handle missing values
        group[f"nodes/attrs/{name}"] = np.array([graph.nodes[node][name] for node in nodes_list])

    # write edges
    group["edges/ids"] = edges_arr

    # write edge attributes
    for name in get_edge_attrs(graph):
        group[f"edges/attrs/{name}"] = np.array([graph.edges[edge][name] for edge in edges_list])


def read(path):
    # open zarr container
    path = Path(path)
    assert path.exists(), f"Cannot read graph from {path} because it does not exist"
    group = zarr.open(path, "r")

    # read meta-data
    directed = group.attrs["directed"]
    graph = nx.DiGraph() if directed else nx.Graph()

    nodes = group["nodes/ids"][:]
    graph.add_nodes_from(nodes.tolist())
    edges = group["edges/ids"][:]
    graph.add_edges_from(edges.tolist())

    # collect node attributes
    for name in group["nodes/attrs"]:
        ds = group[f"nodes/attrs/{name}"]
        print(nodes)
        print(ds[:])
        for node, val in zip(nodes, ds[:]):
            val = val.tolist() if val.size > 1 else val.item()
            graph.nodes[node.item()][name] = val

    # collect edge attributes]
    for name in group["edges/attrs"]:
        ds = group[f"edges/attrs/{name}"]
        for edge, val in zip(edges, ds[:]):
            val = val.tolist() if val.size > 1 else val.item()
            graph.edges[*edge.tolist()][name] = val

    return graph

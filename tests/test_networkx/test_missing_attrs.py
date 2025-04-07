from pathlib import Path

import networkx as nx
import numpy as np
import zarr

from geff.networkx import write
from geff.utils import validate


def graph_sparse_node_attrs():
    graph = nx.Graph()
    nodes = [1, 2, 3, 4, 5]
    positions = [
        [0, 1, 2],
        [0, 0, 0],
        [1, 1, 3],
        [1, 5, 2],
        [1, 7, 6],
    ]
    node_scores = [0.5, 0.2, None, None, 0.1]
    for node, pos, score in zip(nodes, positions, node_scores):
        if score is not None:
            graph.add_node(node, position=pos, score=score)
        else:
            graph.add_node(node, position=pos)
    return graph


def test_sparse_node_attrs(tmp_path):
    zarr_path = Path(tmp_path) / "test.zarr"
    graph = graph_sparse_node_attrs()
    write(graph, position_attr="position", path=zarr_path)
    # check that the written thing is valid
    assert Path(zarr_path).exists()
    validate(zarr_path)

    zroot = zarr.open(zarr_path, mode="r")
    positions = [
        [0, 1, 2],
        [0, 0, 0],
        [1, 1, 3],
        [1, 5, 2],
        [1, 7, 6],
    ]

    node_attrs = zroot["nodes"]["attrs"]
    pos = node_attrs["position"]["values"][:]
    np.testing.assert_array_almost_equal(np.array(positions), pos)
    scores = node_attrs["score"]["values"][:]
    assert scores[0] == 0.5
    assert scores[1] == 0.2
    assert scores[4] == 0.1
    score_mask = node_attrs["score"]["missing"][:]
    np.testing.assert_array_almost_equal(score_mask, np.array([0, 0, 1, 1, 0]))

    # read it back in and check for consistency
    # read_graph = read(zarr_path)
    # for node, data in graph.nodes(data=True):
    #     assert read_graph.nodes[node] == data

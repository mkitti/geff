import pytest
import spatial_graph as sg
import geff
import numpy as np


node_dtypes = ["int8", "uint8", "int16", "uint16"]
node_attr_dtypes = [
    {"position": "double[4]"},
    {"position": "int[4]"},
]
edge_attr_dtypes = [
    {},
    {"score": "float64"},
    {"score": "float64", "color": "uint8"},
]


@pytest.mark.parametrize("node_dtype", node_dtypes)
@pytest.mark.parametrize("node_attr_dtypes", node_attr_dtypes)
@pytest.mark.parametrize("edge_attr_dtypes", edge_attr_dtypes)
@pytest.mark.parametrize("directed", [True, False])
def test_read_write_consistency(
    node_dtype, node_attr_dtypes, edge_attr_dtypes, directed
):
    graph = sg.SpatialGraph(
        ndims=4,
        node_dtype=node_dtype,
        node_attr_dtypes=node_attr_dtypes,
        edge_attr_dtypes=edge_attr_dtypes,
        position_attr="position",
        directed=directed,
    )

    graph.add_nodes(
        np.array([10, 2, 127, 4, 5], dtype=graph.node_dtype),
        position=np.array(
            [
                [0.1, 0.5, 100.0, 1.0],
                [0.2, 0.4, 200.0, 0.1],
                [0.3, 0.3, 300.0, 0.1],
                [0.4, 0.2, 400.0, 0.1],
                [0.5, 0.1, 500.0, 0.1],
            ],
            dtype=graph.coord_dtype,
        ),
    )

    geff.write(graph, "rw_consistency.zarr/graph")

    compare = geff.read("rw_consistency.zarr/graph")

    assert graph == compare

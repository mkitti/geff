import zarr
import spatial_graph as sg
from pathlib import Path
from .version import __version
from typing import Optional


def write(
    graph: sg.SpatialGraph,
    path: str | Path,
    axis_names: Optional[list[str]] = None,
    axis_units: Optional[list[str]] = None,
):
    # open/create zarr container
    group = zarr.open(path, "a")

    # write meta-data
    group.attrs["geff_spec"] = __version
    group.attrs["position_attr"] = graph.position_attr
    group.attrs["directed"] = graph.directed
    group.attrs["roi"] = (
        tuple(graph.roi[0].tolist()),
        tuple(graph.roi[1].tolist()),
    )
    if axis_names:
        graph.attrs["axis_names"] = axis_names
    if axis_units:
        graph.attrs["axis_units"] = axis_units

    # write nodes
    group["nodes/ids"] = graph.nodes


def read(path):
    pass

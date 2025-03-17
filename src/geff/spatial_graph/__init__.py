try:
    import spatial_graph  # noqa: F401
except ImportError as err:
    raise ImportError(
        "The spatial_graph submodule depends on spatial-graph as an optional dependency. "
        "Please run `pip install geff[spatial-graph]` to install the optional dependency."
    ) from err

from .io import read, write

__all__ = ["read", "write"]

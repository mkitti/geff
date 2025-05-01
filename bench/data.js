window.BENCHMARK_DATA = {
  "lastUpdate": 1746129266789,
  "repoUrl": "https://github.com/live-image-tracking-tools/geff",
  "entries": {
    "Python Benchmark with pytest-benchmark": [
      {
        "commit": {
          "author": {
            "email": "msschwartz21@gmail.com",
            "name": "Morgan Schwartz",
            "username": "msschwartz21"
          },
          "committer": {
            "email": "msschwartz21@gmail.com",
            "name": "Morgan Schwartz",
            "username": "msschwartz21"
          },
          "distinct": true,
          "id": "029621dc3e7f32f5cd14b29870f930e593e359c2",
          "message": "Add scm env variable to gh pages action",
          "timestamp": "2025-05-01T15:52:20-04:00",
          "tree_id": "a895b8eeae659267318b71bdf59850878e55bc8b",
          "url": "https://github.com/live-image-tracking-tools/geff/commit/029621dc3e7f32f5cd14b29870f930e593e359c2"
        },
        "date": 1746129265710,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_write",
            "value": 0.13561316530585438,
            "unit": "iter/sec",
            "range": "stddev: 0.0299426634299259",
            "extra": "mean: 7.373915340333336 sec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_validate",
            "value": 365.80231238362063,
            "unit": "iter/sec",
            "range": "stddev: 0.00031073327806497604",
            "extra": "mean: 2.7337169999934 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_read",
            "value": 0.06300089966349438,
            "unit": "iter/sec",
            "range": "stddev: 0.5470120897994015",
            "extra": "mean: 15.872789203666656 sec\nrounds: 3"
          }
        ]
      }
    ]
  }
}
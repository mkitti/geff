window.BENCHMARK_DATA = {
  "lastUpdate": 1746134014650,
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
      },
      {
        "commit": {
          "author": {
            "email": "malinmayorc@janelia.hhmi.org",
            "name": "Caroline Malin-Mayor",
            "username": "cmalinmayor"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8018bf0741cf2905d028c1e9876921a6a766d230",
          "message": "Merge pull request #43 from live-image-tracking-tools/41-metadata\n\nSave and load metadata fully",
          "timestamp": "2025-05-01T16:38:05-04:00",
          "tree_id": "c4b3156aeccc9b46afccf0eb4eea4417cc6807ea",
          "url": "https://github.com/live-image-tracking-tools/geff/commit/8018bf0741cf2905d028c1e9876921a6a766d230"
        },
        "date": 1746132040086,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_write",
            "value": 0.13512345883098548,
            "unit": "iter/sec",
            "range": "stddev: 0.02128361089617375",
            "extra": "mean: 7.40063944966666 sec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_validate",
            "value": 365.99921017248704,
            "unit": "iter/sec",
            "range": "stddev: 0.00029044500712752845",
            "extra": "mean: 2.7322463333424216 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_read",
            "value": 0.06277695766855433,
            "unit": "iter/sec",
            "range": "stddev: 0.5359005540661197",
            "extra": "mean: 15.929411636666666 sec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "msschwartz21@gmail.com",
            "name": "Morgan Schwartz",
            "username": "msschwartz21"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "166920974c144529053966346346a5647e25b126",
          "message": "Add support for zarr 2 and 3 (#42)\n\n* Add support for zarr 2 and 3\n\n* Try fixing zarr install\n\n* Update test function for zarr 3 syntax\n\n* Resolve zarr deprecation warnings\n\n* Skip testing zarr 3 on python 3.10\n\n* Make test code  work with zarr 2 and 3\n\n* Use tmp_path instead of tmpdir in tests\n\n* Review feedback\n\n* Remove cast to string because Paths are supported\n\n* Get tests to pass\n\n* Use Path in benchmark functions\n\n---------\n\nCo-authored-by: Caroline Malin-Mayor <malinmayorc@janelia.hhmi.org>",
          "timestamp": "2025-05-01T17:05:36-04:00",
          "tree_id": "a0857db0c9337601abe9297e2a7ff7a7193f8d6b",
          "url": "https://github.com/live-image-tracking-tools/geff/commit/166920974c144529053966346346a5647e25b126"
        },
        "date": 1746133688502,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_write",
            "value": 0.13230598755983364,
            "unit": "iter/sec",
            "range": "stddev: 0.017444794270241534",
            "extra": "mean: 7.558236920666673 sec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_validate",
            "value": 41.323413161317305,
            "unit": "iter/sec",
            "range": "stddev: 0.0009082148047173535",
            "extra": "mean: 24.199356333326705 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_read",
            "value": 0.061765764248896564,
            "unit": "iter/sec",
            "range": "stddev: 0.4369738380750813",
            "extra": "mean: 16.19019876399999 sec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "malinmayorc@janelia.hhmi.org",
            "name": "Caroline Malin-Mayor",
            "username": "cmalinmayor"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ad9bbd4ef1acbe698b326f2ea5c0d062baaa5a47",
          "message": "Remove spatial graph from README and PR template (#46)\n\n* Remove spatial graph from README and PR template\n\n* Update links in pyproject.toml\n\n---------\n\nCo-authored-by: Morgan Schwartz <msschwartz21@gmail.com>",
          "timestamp": "2025-05-01T17:10:53-04:00",
          "tree_id": "8e28aeef5b5dae8f6dc8331a7238a9437f00d5bf",
          "url": "https://github.com/live-image-tracking-tools/geff/commit/ad9bbd4ef1acbe698b326f2ea5c0d062baaa5a47"
        },
        "date": 1746134014071,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_write",
            "value": 0.1317593000588966,
            "unit": "iter/sec",
            "range": "stddev: 0.06036641119597091",
            "extra": "mean: 7.589597087666665 sec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_validate",
            "value": 39.8007584645015,
            "unit": "iter/sec",
            "range": "stddev: 0.0006109597631318234",
            "extra": "mean: 25.125149333319996 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_read",
            "value": 0.06231025220596681,
            "unit": "iter/sec",
            "range": "stddev: 0.48398951712292115",
            "extra": "mean: 16.04872335766666 sec\nrounds: 3"
          }
        ]
      }
    ]
  }
}
window.BENCHMARK_DATA = {
  "lastUpdate": 1749482749857,
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
      },
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
          "id": "7fa04a1c99820a2344b52fda12e6c2fea57d3d86",
          "message": "Add 0.1 to supported versions",
          "timestamp": "2025-05-02T10:06:37-04:00",
          "tree_id": "a1801e84ebd6761901f5ced856bdc266c13aa3b9",
          "url": "https://github.com/live-image-tracking-tools/geff/commit/7fa04a1c99820a2344b52fda12e6c2fea57d3d86"
        },
        "date": 1746194939597,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_write",
            "value": 0.13073676183148755,
            "unit": "iter/sec",
            "range": "stddev: 0.046781299029505896",
            "extra": "mean: 7.648957997666675 sec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_validate",
            "value": 38.737212829896926,
            "unit": "iter/sec",
            "range": "stddev: 0.0007288784200203826",
            "extra": "mean: 25.814970333338277 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_read",
            "value": 0.06208278214701933,
            "unit": "iter/sec",
            "range": "stddev: 0.5129349935750673",
            "extra": "mean: 16.107525555666665 sec\nrounds: 3"
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
            "email": "msschwartz21@gmail.com",
            "name": "Morgan Schwartz",
            "username": "msschwartz21"
          },
          "distinct": true,
          "id": "97654279752215f33e6792237567eb8e090825df",
          "message": "Update json schema",
          "timestamp": "2025-05-02T10:08:07-04:00",
          "tree_id": "72c2ce5d31fe1eb9cb2fbfb14b16050dbdf83907",
          "url": "https://github.com/live-image-tracking-tools/geff/commit/97654279752215f33e6792237567eb8e090825df"
        },
        "date": 1746195082448,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_write",
            "value": 0.12916558064910222,
            "unit": "iter/sec",
            "range": "stddev: 0.06651300248353748",
            "extra": "mean: 7.742000577666668 sec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_validate",
            "value": 39.4224360810662,
            "unit": "iter/sec",
            "range": "stddev: 0.0002540650937422267",
            "extra": "mean: 25.36626599999181 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_read",
            "value": 0.06062424212980675,
            "unit": "iter/sec",
            "range": "stddev: 0.7411778533321154",
            "extra": "mean: 16.49505156466667 sec\nrounds: 3"
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
          "id": "bf475bd96dd5a0b3d540febba23b51adcdfc6a2e",
          "message": "Update dev notes and bugfix deploy action (#48)\n\n* Add notes about releases\n\n* Fix deploy action that checks that supported versions is up to date",
          "timestamp": "2025-05-02T10:15:45-04:00",
          "tree_id": "bfeb5b5f6ece9f1bdde7a9df04b541c0c58d12cf",
          "url": "https://github.com/live-image-tracking-tools/geff/commit/bf475bd96dd5a0b3d540febba23b51adcdfc6a2e"
        },
        "date": 1746195501770,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_write",
            "value": 0.13333210044399263,
            "unit": "iter/sec",
            "range": "stddev: 0.07667985222091646",
            "extra": "mean: 7.500069350666678 sec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_validate",
            "value": 40.514471668002614,
            "unit": "iter/sec",
            "range": "stddev: 0.00112788319093007",
            "extra": "mean: 24.68253833332786 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_read",
            "value": 0.06219479649351004,
            "unit": "iter/sec",
            "range": "stddev: 0.444083006084229",
            "extra": "mean: 16.078515509 sec\nrounds: 3"
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
            "email": "msschwartz21@gmail.com",
            "name": "Morgan Schwartz",
            "username": "msschwartz21"
          },
          "distinct": true,
          "id": "19e48ff054a6772cdaa3a11fdbf351ecfea6f4a3",
          "message": "additional deploy action bugfix",
          "timestamp": "2025-05-02T10:17:56-04:00",
          "tree_id": "175b5d933262f7151b743521290e0e3eed602b68",
          "url": "https://github.com/live-image-tracking-tools/geff/commit/19e48ff054a6772cdaa3a11fdbf351ecfea6f4a3"
        },
        "date": 1746195626015,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_write",
            "value": 0.13204822954625095,
            "unit": "iter/sec",
            "range": "stddev: 0.08419713926622867",
            "extra": "mean: 7.572990591666676 sec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_validate",
            "value": 41.20163808372054,
            "unit": "iter/sec",
            "range": "stddev: 0.0004680122384457904",
            "extra": "mean: 24.27087966667803 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_read",
            "value": 0.062197974193076495,
            "unit": "iter/sec",
            "range": "stddev: 0.4444821724850281",
            "extra": "mean: 16.077694056333332 sec\nrounds: 3"
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
            "email": "msschwartz21@gmail.com",
            "name": "Morgan Schwartz",
            "username": "msschwartz21"
          },
          "distinct": true,
          "id": "19e48ff054a6772cdaa3a11fdbf351ecfea6f4a3",
          "message": "additional deploy action bugfix",
          "timestamp": "2025-05-02T10:17:56-04:00",
          "tree_id": "175b5d933262f7151b743521290e0e3eed602b68",
          "url": "https://github.com/live-image-tracking-tools/geff/commit/19e48ff054a6772cdaa3a11fdbf351ecfea6f4a3"
        },
        "date": 1746589839570,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_write",
            "value": 0.12983098020358938,
            "unit": "iter/sec",
            "range": "stddev: 0.05637559853345289",
            "extra": "mean: 7.702321883666666 sec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_validate",
            "value": 39.421354955324674,
            "unit": "iter/sec",
            "range": "stddev: 0.00046329808775675955",
            "extra": "mean: 25.36696166667222 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_read",
            "value": 0.06230545688586261,
            "unit": "iter/sec",
            "range": "stddev: 0.380610788976034",
            "extra": "mean: 16.049958542666662 sec\nrounds: 3"
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
            "email": "msschwartz21@gmail.com",
            "name": "Morgan Schwartz",
            "username": "msschwartz21"
          },
          "distinct": true,
          "id": "f2bad2252c408fa66f95d6f837ec014d38410490",
          "message": "Remove env variable from github action so that deploy works correctly",
          "timestamp": "2025-05-21T15:35:32-04:00",
          "tree_id": "582d2e1ea74aa0f044991b05837ebf95f32d94b3",
          "url": "https://github.com/live-image-tracking-tools/geff/commit/f2bad2252c408fa66f95d6f837ec014d38410490"
        },
        "date": 1747856290971,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_write",
            "value": 0.1309941814769118,
            "unit": "iter/sec",
            "range": "stddev: 0.030928851143142505",
            "extra": "mean: 7.6339268563333365 sec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_validate",
            "value": 40.39732547084576,
            "unit": "iter/sec",
            "range": "stddev: 0.0005569420386673272",
            "extra": "mean: 24.754113999989613 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_read",
            "value": 0.06190503046588155,
            "unit": "iter/sec",
            "range": "stddev: 0.4343135261786798",
            "extra": "mean: 16.153776074000024 sec\nrounds: 3"
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
            "email": "msschwartz21@gmail.com",
            "name": "Morgan Schwartz",
            "username": "msschwartz21"
          },
          "distinct": true,
          "id": "f2bad2252c408fa66f95d6f837ec014d38410490",
          "message": "Remove env variable from github action so that deploy works correctly",
          "timestamp": "2025-05-21T15:35:32-04:00",
          "tree_id": "582d2e1ea74aa0f044991b05837ebf95f32d94b3",
          "url": "https://github.com/live-image-tracking-tools/geff/commit/f2bad2252c408fa66f95d6f837ec014d38410490"
        },
        "date": 1747856417216,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_write",
            "value": 0.13052457402137832,
            "unit": "iter/sec",
            "range": "stddev: 0.04778223859528065",
            "extra": "mean: 7.661392557666669 sec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_validate",
            "value": 37.596522020928774,
            "unit": "iter/sec",
            "range": "stddev: 0.0006522501753038362",
            "extra": "mean: 26.598205000008573 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_read",
            "value": 0.061712705199432186,
            "unit": "iter/sec",
            "range": "stddev: 0.5186527806230805",
            "extra": "mean: 16.204118694333317 sec\nrounds: 3"
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
          "id": "7ef517a5f3f5784edd0502d1aeedf779dfc21121",
          "message": "Check if there are additional edge attributes before adding to graph (#51)",
          "timestamp": "2025-06-02T15:50:30-04:00",
          "tree_id": "98e3a851a5ae78c4d5d23bd9dcc3263242a58956",
          "url": "https://github.com/live-image-tracking-tools/geff/commit/7ef517a5f3f5784edd0502d1aeedf779dfc21121"
        },
        "date": 1748893988798,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_write",
            "value": 0.1319776240031371,
            "unit": "iter/sec",
            "range": "stddev: 0.05206763989380486",
            "extra": "mean: 7.577041998999998 sec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_validate",
            "value": 40.16317763564864,
            "unit": "iter/sec",
            "range": "stddev: 0.000712611538922552",
            "extra": "mean: 24.898428333330003 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_read",
            "value": 0.06118176923099284,
            "unit": "iter/sec",
            "range": "stddev: 0.5287178501322192",
            "extra": "mean: 16.344738188666668 sec\nrounds: 3"
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
          "id": "7ef517a5f3f5784edd0502d1aeedf779dfc21121",
          "message": "Check if there are additional edge attributes before adding to graph (#51)",
          "timestamp": "2025-06-02T15:50:30-04:00",
          "tree_id": "98e3a851a5ae78c4d5d23bd9dcc3263242a58956",
          "url": "https://github.com/live-image-tracking-tools/geff/commit/7ef517a5f3f5784edd0502d1aeedf779dfc21121"
        },
        "date": 1749482749423,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_write",
            "value": 0.13074507012891357,
            "unit": "iter/sec",
            "range": "stddev: 0.03964761123681386",
            "extra": "mean: 7.64847193866666 sec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_validate",
            "value": 37.66822724457887,
            "unit": "iter/sec",
            "range": "stddev: 0.00034343295404212494",
            "extra": "mean: 26.547572666667445 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_read",
            "value": 0.06299809721177169,
            "unit": "iter/sec",
            "range": "stddev: 0.6580076909468524",
            "extra": "mean: 15.873495299999982 sec\nrounds: 3"
          }
        ]
      }
    ]
  }
}
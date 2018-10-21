{
  "targets": [{
    "target_name": "lib",
    "sources": [
      "src/lib.cc"
    ],
    "include_dirs": [
      "<!(node -e \"require('nan')\")"
    ]
  }]
}

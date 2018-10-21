{
  "targets": [{
    "target_name": "uvloop",
    "sources": [
      "src/uvloop.cc"
    ],
    "include_dirs": [
      "<!(node -e \"require('nan')\")"
    ]
  }]
}

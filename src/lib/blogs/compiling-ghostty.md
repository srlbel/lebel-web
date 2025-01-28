---
title: Compiling Ghostty in Void Linux
date: 28-12-2024
description: A quick guide on how to compile the new terminal Ghostty in Void Linux
tags: ["terminal", "linux"]
published: true
---

# Notes

By the time I made wrote this, [ghostty](https://ghostty.org/) haven't announced a way to compile Ghostty in Void Linux and neither is available in the [Void Packages](https://github.com/void-linux/void-packages) repo. So, there's probably a better way to install Ghostty using **xbps** by the time I publish this.

# Prerequisites

In order to compile you need the following packages:

- zig
- gtk4-devel
- libadwaita-devel
- pkg-config
- git

**gtk4-devel**, **libadwaita-devel** and **zig** are required for building ghostty's UI. **pkg-config** is mostly required to link the files from the dependencies to build the codebase.

# Process

```shell
git clone https://github.com/ghostty-org/ghostty
cd ghostty
zig build -Doptimize=ReleaseFast
```

According to the Ghostty documentation, for a system wide installation the following command can be used:

```shell
zig build -p /usr -Doptimize=ReleaseFast
```

and then you must be able to launch Ghostty from your preferred program runner.

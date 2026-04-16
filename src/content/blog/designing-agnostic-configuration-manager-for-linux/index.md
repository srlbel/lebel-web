---
title: Designing an agnostic configuration manager for linux
publicationDate: 2026-04-16
description: The process of designing a configuration manager for unix based systems for keeping dotfiles tracked and synchronized
tags:
  - linux
  - dotfiles
published: true
---
The very firsts problems when you start ricing your linux distro is that dotfiles are strange to keep updated because everything is scattered across your systems either at `.config/` and/or `/etc/*` folder.

There are already systems designed to fix this issue, such as the distro `NixOs` where your whole system is declared on a couple of files that reside at you `/etc/nixos/*`, making your system easily replicable at any *compatible* machine. The problem with this is that not all piece of software is fully compatible with `nix` configuration system, so you will need to find a workaround for that.

In my case, I'm running 2 machines running the same Arch distro and I keep my dotfiles stored at my [dotfiles repo](https://github.com/srlbel/dotfiles), thing is everytime I need to update my dotfiles on the main repo I have to manually copy every configuration I made into the repo and then commit, making this a hard labor at large scale.

# So, what is needed for solving this?
You have to make a system where:
1. You can easily recover and restore your config files
2. You need to make it accesible for the user via GUI or CLI
3. You need to define a system where the manager knows where to look up for the files

This can easily be done by almost any programming language out there, even a single bash file.

# What are my technical decisions for this?
1. I will implement a file configuration for the repo so the software knows where to look for the configs with a table-like system
2. It will be a CLI tool so users can just `tool --restore` or `tool -recover` to get/set their dotfiles fast
3. I will use rust because it's what I'm familiar with 

# Why not use a simple `install.sh` file?
As a said earlier, you may want to keep your files synched, not _reinstall_ all your system from scratch. I only see the `install.sh` file as a form to install the whole system at once, like [caelestia-shell](https://github.com/caelestia-dots/caelestia) does.

The next post will be the actual coding. lol.
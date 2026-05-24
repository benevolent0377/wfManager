# Warframe Manager

> A non-invasive, privacy-first desktop companion for Warframe.

![Version](https://img.shields.io/badge/version-Alpha%200.1-orange)
![Status](https://img.shields.io/badge/status-in%20development-blue)
![Platform](https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20macOS-lightgrey)
![License](https://img.shields.io/badge/license-MIT-green)

---

## Overview

Warframe Manager is a long-term open-source desktop application designed to help players organize, analyze, and interact with Warframe-related data in a clean and non-invasive way.

The project focuses on:

- Fast access to Warframe APIs and community tools
- Market and economy tracking
- Resource and inventory management
- Data visualization and analytics
- OCR-assisted local account parsing
- Cross-platform desktop support
- Modular architecture for future expansion

This application is **not affiliated with Digital Extremes** and is developed as a community passion project.

---

# Core Philosophy

Warframe Manager is built around several strict design principles.

## Non-Invasive

The application does **not**:

- Inject into the game
- Modify game files
- Read game memory
- Require account credentials
- Interact directly with Warframe itself

All data collection is designed around:

- Public APIs
- Manual user input
- OCR / screenshot parsing
- Local text recognition systems

---

## Privacy-First

All user data is stored locally on the user's machine.

Warframe Manager:

- Does not upload personal data
- Does not require cloud accounts
- Does not track gameplay
- Does not collect credentials

The user owns their data completely.

---

## Long-Term Architecture

This project is intended to scale into a polished multi-platform desktop application.

### Current Stack Direction

| Layer | Technology |
|---|---|
| Frontend | React + Vite + TypeScript |
| Desktop Shell | Tauri |
| Backend Services | Python |
| Local Database | SQLite |

---

# Planned Features

## Alpha Features

- [ ] World State Tracker
- [ ] Warframe API Integration
- [ ] Market Price Lookup
- [ ] Wiki Access
- [ ] Local Data Caching
- [ ] Searchable Item Database
- [ ] Basic UI Framework
- [ ] Terminal Interface

---

## Beta Features

- [ ] Relic Interface
- [ ] Market Statistics
- [ ] Embedded Wiki Browser
- [ ] Scrollable Data Tables
- [ ] Graphs and Trend Visualizations
- [ ] Resource Tracking
- [ ] Inventory Management
- [ ] Theme System
- [ ] OCR Screenshot Parsing
- [ ] Screenshot-Based Account Parsing
- [ ] Configurable Dashboard Layouts

---

## Full Release Goals

- [ ] Advanced User Statistics
- [ ] Modding Assistant
- [ ] Build Recommendations
- [ ] Mission Analytics
- [ ] Damage Tracking Experiments
- [ ] Cross-Platform Packaging
- [ ] Plugin / Extension Support
- [ ] Background Sync Services
- [ ] Offline Data Utilities
- [ ] Automatic Application Updates

---

# First Vertical Slice

The first major implementation target is:

## Item Market Lookup

### Flow

```text
Search Item
    ↓
Python Backend Requests warframe.market API
    ↓
Data Cached Locally in SQLite
    ↓
Frontend Displays:
    - Item Name
    - Buy/Sell Orders
    - Demand Statistics
    - Last Updated Time
```

This slice establishes:

- API communication
- Frontend/backend communication
- Local caching
- Database structure
- UI rendering
- Cross-platform architecture foundations

---

# Project Goals

Warframe Manager aims to become:

- A unified utility hub for Warframe players
- A clean desktop alternative to juggling browser tabs
- A customizable local-first data environment
- A long-term learning and engineering project

The project is also being used to explore:

- Desktop application architecture
- Frontend/backend separation
- API systems
- OCR workflows
- Cross-platform deployment
- Scalable UI systems

---

# Current Development Status

The project is currently in:

## Alpha 0.1

Heavy architectural experimentation and planning are still ongoing.

Many systems are placeholders or prototypes while the core structure is being established.

---

# Repository Structure (Planned)

```text
wf-manager/
│
├── frontend/          # React + TypeScript UI
├── backend/           # Python services and API layer
├── shared/            # Shared models/types
├── database/          # SQLite schemas and migrations
├── assets/            # Images, icons, themes
├── docs/              # Documentation and roadmaps
└── scripts/           # Utility/build scripts
```

---

# Development Priorities

Current priority order:

1. Establish clean architecture
2. Build stable API layer
3. Implement SQLite caching
4. Create minimal UI shell
5. Complete first vertical slice
6. Expand modular systems gradually

---

# Contributing

This project is still early in development.

Contributions, architecture suggestions, and experimentation are welcome once the initial structure stabilizes.

---

# Disclaimer

Warframe Manager is a third-party community project.

This project is:

- Not endorsed by Digital Extremes
- Not affiliated with Warframe
- Not intended to violate the game's Terms of Service

All trademarks and assets belong to their respective owners.

---

# License

MIT License

---

# Useful Links

## Warframe

- https://www.warframe.com/

## Warframe Market

- https://warframe.market/

## Warframe Stat API

- https://api.warframestat.us/

---

# Author

Developed as a long-term systems and software engineering project by the repository owner.

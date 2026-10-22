---
title: Reizor Hosting
summary: A distributed game-hosting platform in Go, from the node daemon to the storefront, serving over 1,000 customers.
context: Co-owner, Reizor Hosting LLC
when: 2024 – now
order: 1
stack: [Go, Next.js, PHP, Spring Boot]
links:
  - { label: Visit reizorhosting.com, href: 'https://reizorhosting.com' }
---

Reizor Hosting is a game-server hosting company I co-own and build.

## The panel

The core of the platform is distributed panel software written in Go. A daemon runs on every node and manages the game servers on that machine. A panel on a control-plane node sits in front of them all and acts as the single point of entry for customers.

## Around it

- **Storefront.** The marketing site and storefront, built from the ground up in Next.js.
- **Billing.** An existing PHP billing system, extended to fit how we work and to automate repetitive processes.
- **Automation.** Tooling in JavaScript, Java with Spring Boot, and Go that handles routine tasks and infrastructure deployments, rollouts, and upgrades.
- **Backups.** Multiple layers of automated backups, shipped to more than one object storage platform for redundancy.

## Outcome

By consistently shipping new features and putting real care into support, we've grown to over 1,000 customers.

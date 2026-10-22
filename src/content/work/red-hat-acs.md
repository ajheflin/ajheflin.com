---
title: OpenShift Advanced Cluster Security
summary: Go services, a Kubernetes controller and data-model work on Red Hat's Kubernetes security platform.
context: Senior Software Engineer, Red Hat
when: 2025 – now
order: 2
stack: [Go, gRPC, Protobuf, Kubernetes, Postgres, GraphQL]
links:
  - { label: StackRox on GitHub, href: 'https://github.com/stackrox/stackrox' }
---

Red Hat Advanced Cluster Security for Kubernetes is built in the open as StackRox. I work on its Go backend.

## What I've worked on

- **New services** in Go, built on gRPC and protocol buffers.
- **A Custom Resource Definition and controller** that reconciles Kubernetes objects against a Go gRPC API, keeping state consistent across platforms.
- **Data model improvements** to the Postgres-backed store, where protocol buffers model the stored data.
- **GraphQL resolvers** in the Go API, extending GraphQL support to new and modified storage models.
- **Metrics** across the backend, tracked into Prometheus and Grafana.

## How the work happens

Much of it starts as a design document. I collaborate on new designs and iterate on those documents with other engineers. I also work directly with customers to resolve their concerns and ship the critical features they need.

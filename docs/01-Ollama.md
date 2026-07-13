---

title: Ollama

slug: ollama

type: lesson

order: 1

module: Local AI

difficulty: Beginner

duration: 20 minutes

description: Learn what Ollama is, why it exists, how it manages local AI models, and how applications communicate with it.

tags:

  - ollama

  - local ai

  - runtime

  - llm

prerequisites:

  - bootcamp-roadmap

next: large-language-models

previous: bootcamp-roadmap

---

# Lesson 01 – Ollama

**Status:** In Progress

---

# Learning Objectives

After completing this lesson, I should be able to:

- Explain what Ollama is.
- Explain why Ollama exists.
- Explain the difference between Ollama and an AI model.
- Understand how applications communicate with Ollama.
- Explain how companies use Ollama.

---

# What is Ollama?

Ollama is an AI runtime that allows developers to run open-source Large Language Models (LLMs) on their own computer or server.

Think of Ollama as the software responsible for loading, running, and serving AI models.

Ollama itself is **not** the AI.

It is the runtime that manages AI models.

---

# Why was Ollama created?

Before Ollama, running open-source AI models required a lot of manual setup.

Developers had to:

- Download model files
- Configure inference engines
- Configure GPU acceleration
- Manage memory
- Build their own API server

Ollama simplifies all of these tasks into a single application.

---

# Analogy

Node.js runs JavaScript.

Docker runs containers.

Ollama runs AI models.

---

# Ollama vs Llama

Ollama = Runtime

Llama = AI Model

Relationship:

User

↓

Application

↓

Ollama

↓

Llama

↓

Response

---

# What happens when I type:

ollama run llama3.2

Internally:

1. Ollama finds the model.
2. It loads the model into memory.
3. It uses the GPU (Metal on Apple Silicon).
4. It starts generating responses.
5. After inactivity, it unloads the model from memory.

---

# API

Ollama exposes a local HTTP API.

Example:

http://localhost:11434

Applications communicate with Ollama by sending HTTP requests.

Exactly like calling the OpenAI or Anthropic API.

The difference is that Ollama runs locally.

---

# Commands Learned

ollama list

Lists installed models.

---

ollama ps

Shows loaded models.

---

ollama run llama3.2

Loads and runs a model.

---

ollama show llama3.2

Displays detailed model information.

---

# Real-world Example

Imagine a company wants an AI assistant for internal documents.

Instead of sending confidential data to a cloud AI provider:

Employee

↓

Company Web App

↓

Ollama

↓

Qwen

↓

Answer

Everything stays inside the company's own infrastructure.

---

# Key Takeaways

- Ollama is NOT the AI.
- Ollama is the runtime.
- Llama is the AI model.
- Ollama exposes an HTTP API.
- Applications communicate with Ollama using HTTP requests.

---

# Reflection

(Write this after completing the lesson.)

What was the biggest thing I learned today?
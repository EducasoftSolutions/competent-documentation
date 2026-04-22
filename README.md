# Competent — Uživatelská příručka (docs repo)

Dokumentační repozitář pro LMS Competent od Educasoftu.

## Struktura

```
docs/
├── tutorials/    # Tutoriály — učení přes dělání
├── how-to/       # Návody — konkrétní postupy
├── reference/    # Reference — technické detaily
└── concepts/     # Koncepty — vysvětlení principů
```

## Lokální preview

```bash
python3 -m venv .venv
.venv/bin/pip install -r requirements.txt
.venv/bin/mkdocs serve --dev-addr 127.0.0.1:8001
```

## Build (strict)

```bash
.venv/bin/mkdocs build --strict
```

Tento soubor je interní meta-dokumentace. Není součástí publikovaného webu.

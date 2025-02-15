#!/bin/bash
# Define the source and destination directories
SCHEMA_DIR="./schema"
OUTPUT_DIR="./docs/schema"

# Create the output directory if it doesn't exist
mkdir -p "$OUTPUT_DIR"

# Process only the JSON files in the SCHEMA_DIR (ignore subdirectories)
find "$SCHEMA_DIR" -maxdepth 1 -type f -name "*.json" | while read -r schema; do
  # Extract the filename without extension
  base=$(basename "$schema" .json)
  echo "Processing $schema -> $OUTPUT_DIR/$base.md"
  # Convert JSON schema to Markdown using json-schema-for-humans
  json-schema-for-humans --input "$schema" --output "$OUTPUT_DIR/$base.md"
done

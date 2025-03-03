import os
import django
from django.core.management import call_command

# Set up Django environment manually
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backend.settings.test")
os.environ.setdefault("DJANGO_CONFIGURATION", "Test")

django.setup()

# Generate the model graph
output_file = "backend/backend_models.png"
call_command("graph_models", "-a", "-g", "-o", output_file)

print(f"Model graph saved to {output_file}")

# Generated by Django 5.1.1 on 2024-09-21 19:13

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("github", "0008_alter_repositorycontributor_options"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="repositorycontributor",
            name="node_id",
        ),
    ]
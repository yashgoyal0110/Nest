# Generated by Django 5.1.7 on 2025-03-13 00:54

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("owasp", "0025_remove_event_country_remove_event_postal_code_and_more"),
    ]

    operations = [
        migrations.CreateModel(
            name="Post",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True, primary_key=True, serialize=False, verbose_name="ID"
                    ),
                ),
                ("nest_created_at", models.DateTimeField(auto_now_add=True)),
                ("nest_updated_at", models.DateTimeField(auto_now=True)),
                (
                    "author_image_url",
                    models.URLField(blank=True, default="", verbose_name="Author image URL"),
                ),
                ("author_name", models.CharField(max_length=100, verbose_name="Author name")),
                ("published_at", models.DateTimeField(verbose_name="Publication date")),
                ("title", models.CharField(max_length=200, verbose_name="Title")),
                ("url", models.URLField(unique=True, verbose_name="URL")),
            ],
            options={
                "verbose_name_plural": "Posts",
                "db_table": "owasp_posts",
            },
        ),
    ]

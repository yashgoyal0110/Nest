# Generated by Django 5.2.1 on 2025-05-27 18:59

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("slack", "0010_workspace_total_members_count"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="conversation",
            name="member_count",
        ),
        migrations.AddField(
            model_name="conversation",
            name="total_members_count",
            field=models.PositiveIntegerField(default=0, verbose_name="Total members count"),
        ),
    ]

# Generated by Django 4.0.4 on 2022-05-23 21:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('incidents', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='incident',
            name='vehicle_description',
        ),
        migrations.AddField(
            model_name='incident',
            name='vehicle_color',
            field=models.CharField(default='n/a', max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='incident',
            name='vehicle_make',
            field=models.CharField(default='n/a', max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='incident',
            name='vehicle_model',
            field=models.CharField(default='n/a', max_length=100),
            preserve_default=False,
        ),
    ]

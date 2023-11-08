
from django.db import models
from django.core.validators import RegexValidator

identity_number_validator = RegexValidator(
    regex=r'^\d{16}$',
    message="Identity number must be a 16-digit number",
)

class UsersData(models.Model):
    name = models.CharField(max_length=255) 
    identity_number = models.CharField(max_length=16, unique=True, validators=[identity_number_validator]) 
    email = models.EmailField(unique=True) 
    date_of_birth = models.DateField()  
    
    def __str__(self):
        return f"{self.name} {self.identity_number} {self.email} {str(self.date_of_birth)}"

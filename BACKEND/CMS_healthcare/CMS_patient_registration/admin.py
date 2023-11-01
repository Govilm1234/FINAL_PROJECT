from django.contrib import admin
from .models import AddressDetails,Patient,BankDetails,
# Register your models here.

@admin.register(AddressDetails)
class AddressDetailsAdmin(admin.ModelAdmin):
    list_display = [    'addpatients_details_id',
                        'addpatients_linel',
                        'addpatients_line2',
                        'landmark',
                        'area', 
                        'town',
                        'city',
                        'state',
                        'pincode',
                    ]

@admin.register(Patient)
class PatientAdmin(admin.ModelAdmin):
    list_display = [
                    'personal_identifier',
                    'patient_code',
                    'claim_status',
                    'patient_first_name', 
                    'patient_middle_name',
                    'patient_last_name',
                    'patient_name_prefix',
                    'patient_name_suffix',
                    'patient_age',
                    'patient_weight',
                    'patient_height',
                    'patient_image',
                    'patient_marital_status',
                    'patient_gender',
                    'patient_is_handicap',
                    'patient_date_of_birth',
                    'patient_occupation',
                    'patient_aadhar_card_number',
                    'patient_aadhar_card_image',
                    'created_on',
                    'updated_on',
                    'patients_add_details',
                    'contact_details',
                    ]

@admin.register(BankDetails)
class BankDetailsAdmin(admin.ModelAdmin):
    list_display = [
            'bank_details_identifier',
            'pancard_number',
            'account_number', 
            'bank_name' ,
            'branch_name',
            'ifsc_code',
    ]
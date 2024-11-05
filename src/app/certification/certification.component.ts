import { Component } from '@angular/core';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})
export class CertificationComponent {

  
  courseImages: string[] = [];
  errorMessage: string = '';

  // Image validation and upload
  onImageUpload(event: any) {
    const file = event.target.files[0];
    const fileTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/gif'];
    
    if (file && fileTypes.includes(file.type)) {
      this.errorMessage = ''; // Clear any previous error
      const reader = new FileReader();
      
      reader.onload = () => {
        this.courseImages.push(reader.result as string);
      };
      
      reader.readAsDataURL(file); // Convert file to base64
    } else {
      this.errorMessage = 'Invalid file type. Please upload a valid image (JPEG, PNG, GIF).';
    }
  }
  
  removeImage(index: number) {
    this.courseImages.splice(index, 1); // Remove image by index
  }

}

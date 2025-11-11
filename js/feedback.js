// Feedback Form JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const feedbackForm = document.getElementById('feedbackForm');
    const feedbackTextarea = document.getElementById('feedback');
    const charCount = document.getElementById('charCount');
    
    // Character counter for feedback textarea
    if (feedbackTextarea && charCount) {
        feedbackTextarea.addEventListener('input', function() {
            const currentLength = this.value.length;
            charCount.textContent = currentLength;
            
            // Change color when approaching limit
            if (currentLength > 160) {
                charCount.style.color = '#e74c3c';
            } else if (currentLength > 140) {
                charCount.style.color = '#f39c12';
            } else {
                charCount.style.color = '#999';
            }
        });
    }
    
    // Form submission handler
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                organization: document.getElementById('organization').value,
                category: document.getElementById('category').value,
                feedback: document.getElementById('feedback').value,
                privacy: document.getElementById('privacy').checked
            };
            
            // Validate required fields
            if (!formData.name || !formData.email || !formData.organization || !formData.privacy) {
                alert('Please fill in all required fields and accept the privacy policy.');
                return;
            }
            
            // Here you would typically send the data to a server
            console.log('Form submitted:', formData);
            
            // Show success message
            showSuccessMessage();
            
            // Reset form
            feedbackForm.reset();
            charCount.textContent = '0';
        });
    }
    
    function showSuccessMessage() {
        // Create success message element
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message show';
        successDiv.innerHTML = '<strong>Success!</strong> Your feedback has been submitted. Thank you for your input!';
        
        // Insert before form
        feedbackForm.parentNode.insertBefore(successDiv, feedbackForm);
        
        // Remove after 5 seconds
        setTimeout(() => {
            successDiv.remove();
        }, 5000);
        
        // Scroll to top of form
        feedbackForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
});

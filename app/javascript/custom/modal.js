document.addEventListener('turbo:load', () => {
    const modal = document.getElementById('confirmModal');
    const cancelBtn = document.getElementById('cancelDelete');
    const confirmBtn = document.getElementById('confirmDelete');
    let itemToDeleteId = null;
  
    document.querySelectorAll('.destroy-item').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        itemToDeleteId = e.target.dataset.itemId;
        modal.style.display = 'block';
      });
    });
  
    cancelBtn.onclick = () => {
      modal.style.display = 'none';
    };
  
    confirmBtn.onclick = () => {
      if (itemToDeleteId) {
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = `/items/${itemToDeleteId}`;
  
        const methodInput = document.createElement('input');
        methodInput.type = 'hidden';
        methodInput.name = '_method';
        methodInput.value = 'delete';
  
        const csrfToken = document.querySelector('meta[name="csrf-token"]').content;
        const csrfInput = document.createElement('input');
        csrfInput.type = 'hidden';
        csrfInput.name = 'authenticity_token';
        csrfInput.value = csrfToken;
  
        form.appendChild(methodInput);
        form.appendChild(csrfInput);
        document.body.appendChild(form);
        form.submit();
      }
    };
  
    window.onclick = (e) => {
      if (e.target == modal) {
        modal.style.display = 'none';
      }
    };
  });
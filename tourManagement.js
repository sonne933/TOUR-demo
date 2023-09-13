document.addEventListener("DOMContentLoaded", function() {
    const rowsPerPage = 5;
    const rows = document.querySelectorAll("tbody tr");
    const paginationBtns = document.querySelectorAll(".pagination-btn");
    
    function showPage(pageNumber) {
        for (let i = 0; i < rows.length; i++) {
            if (i >= (pageNumber - 1) * rowsPerPage && i < pageNumber * rowsPerPage) {
                rows[i].style.display = "table-row";
            } else {
                rows[i].style.display = "none";
            }
        }
        
        paginationBtns.forEach(btn => {
            if (parseInt(btn.dataset.page) === pageNumber) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }
    
    paginationBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            showPage(parseInt(btn.dataset.page));
        });
    });
    
    // Mặc định hiển thị trang đầu tiên
    showPage(1);
});

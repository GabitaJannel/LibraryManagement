// Complete book collection
const books = [
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic Literature",
        isbn: "978-0743273565",
        status: "available"
    },
    {
        id: 2,
        title: "Dune",
        author: "Frank Herbert",
        genre: "Science Fiction",
        isbn: "978-0441172719",
        status: "borrowed"
    },
    {
        id: 3,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Classic Literature",
        isbn: "978-0446310789",
        status: "available"
    },
    {
        id: 4,
        title: "The Alchemist",
        author: "Paulo Coelho",
        genre: "Philosophy",
        isbn: "978-0062315007",
        status: "available"
    },
    {
        id: 5,
        title: "The Silent Patient",
        author: "Alex Michaelides",
        genre: "Thriller",
        isbn: "978-1250301697",
        status: "borrowed"
    },
    {
        id: 6,
        title: "Sapiens",
        author: "Yuval Noah Harari",
        genre: "History",
        isbn: "978-0062316097",
        status: "available"
    },
    {
        id: 7,
        title: "The Name of the Wind",
        author: "Patrick Rothfuss",
        genre: "Fantasy",
        isbn: "978-0756404741",
        status: "borrowed"
    },
    {
        id: 8,
        title: "Atomic Habits",
        author: "James Clear",
        genre: "Self-Help",
        isbn: "978-0735211292",
        status: "available"
    },
    {
        id: 9,
        title: "The Thursday Murder Club",
        author: "Richard Osman",
        genre: "Mystery",
        isbn: "978-1984880963",
        status: "available"
    },
    {
        id: 10,
        title: "Project Hail Mary",
        author: "Andy Weir",
        genre: "Science Fiction",
        isbn: "978-0593135204",
        status: "borrowed"
    },
    {
        id: 11,
        title: "The Psychology of Money",
        author: "Morgan Housel",
        genre: "Finance",
        isbn: "978-0857197689",
        status: "available"
    },
    {
        id: 12,
        title: "The Midnight Library",
        author: "Matt Haig",
        genre: "Contemporary Fiction",
        isbn: "978-0525559474",
        status: "available"
    },
    {
        id: 13,
        title: "The Road",
        author: "Cormac McCarthy",
        genre: "Post-Apocalyptic",
        isbn: "978-0307387899",
        status: "available"
    },
    {
        id: 14,
        title: "The Joy of Cooking",
        author: "Irma S. Rombauer",
        genre: "Cooking",
        isbn: "978-0743246262",
        status: "borrowed"
    },
    {
        id: 15,
        title: "Watchmen",
        author: "Alan Moore",
        genre: "Comics & Graphic Novels",
        isbn: "978-1401245250",
        status: "available"
    },
    {
        id: 16,
        title: "The Sun and Her Flowers",
        author: "Rupi Kaur",
        genre: "Poetry",
        isbn: "978-1449486792",
        status: "available"
    },
    {
        id: 17,
        title: "Humans of New York",
        author: "Brandon Stanton",
        genre: "Art & Photography",
        isbn: "978-1250038821",
        status: "borrowed"
    },
    {
        id: 18,
        title: "Into Thin Air",
        author: "Jon Krakauer",
        genre: "Travel & Adventure",
        isbn: "978-0385494786",
        status: "available"
    },
    {
        id: 19,
        title: "Good to Great",
        author: "Jim Collins",
        genre: "Business",
        isbn: "978-0066620992",
        status: "available"
    },
    {
        id: 20,
        title: "The Glass Castle",
        author: "Jeannette Walls",
        genre: "Memoir",
        isbn: "978-0743247542",
        status: "borrowed"
    },
    {
        id: 21,
        title: "The Elements of Style",
        author: "Strunk & White",
        genre: "Reference",
        isbn: "978-0205309023",
        status: "available"
    },
    {
        id: 22,
        title: "The Power of Now",
        author: "Eckhart Tolle",
        genre: "Spirituality",
        isbn: "978-1577314806",
        status: "available"
    },
    {
        id: 23,
        title: "The Complete Shakespeare",
        author: "William Shakespeare",
        genre: "Drama",
        isbn: "978-0199267170",
        status: "borrowed"
    },
    {
        id: 24,
        title: "The World Atlas of Coffee",
        author: "James Hoffmann",
        genre: "Food & Drink",
        isbn: "978-0228100942",
        status: "available"
    }
];

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-input');
    const genreFilter = document.getElementById('genre-filter');
    const statusFilter = document.getElementById('status-filter');
    const catalogGrid = document.querySelector('.catalog-grid');
    const itemsPerPage = 12;
    let currentPage = 1;

    // Populate genre filter with unique genres
    const uniqueGenres = [...new Set(books.map(book => book.genre))].sort();
    genreFilter.innerHTML = '<option value="">All Categories</option>' +
        uniqueGenres.map(genre => `<option value="${genre}">${genre}</option>`).join('');

    // Event listeners
    searchInput.addEventListener('input', () => {
        currentPage = 1;
        filterAndDisplayBooks();
    });
    genreFilter.addEventListener('change', () => {
        currentPage = 1;
        filterAndDisplayBooks();
    });
    statusFilter.addEventListener('change', () => {
        currentPage = 1;
        filterAndDisplayBooks();
    });

    function filterAndDisplayBooks() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedGenre = genreFilter.value;
        const selectedStatus = statusFilter.value;

        const filteredBooks = books.filter(book => {
            const matchesSearch = 
                book.title.toLowerCase().includes(searchTerm) ||
                book.author.toLowerCase().includes(searchTerm) ||
                book.isbn.toLowerCase().includes(searchTerm);
            const matchesGenre = !selectedGenre || book.genre === selectedGenre;
            const matchesStatus = !selectedStatus || book.status === selectedStatus;

            return matchesSearch && matchesGenre && matchesStatus;
        });

        displayBooks(filteredBooks);
        updatePagination(filteredBooks);
    }

    function displayBooks(filteredBooks) {
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const booksToShow = filteredBooks.slice(start, end);

        catalogGrid.innerHTML = booksToShow.length ? 
            booksToShow.map(book => `
                <div class="book-card" data-id="${book.id}">
                    <div class="book-cover">
                        <i class="fas fa-book"></i>
                    </div>
                    <div class="book-info">
                        <h3 class="book-title">${book.title}</h3>
                        <p class="book-details"><i class="fas fa-user"></i> ${book.author}</p>
                        <p class="book-details"><i class="fas fa-bookmark"></i> ${book.genre}</p>
                        <p class="book-details"><i class="fas fa-barcode"></i> ISBN: ${book.isbn}</p>
                        <span class="book-status status-${book.status}">
                            ${book.status.charAt(0).toUpperCase() + book.status.slice(1)}
                        </span>
                    </div>
                </div>
            `).join('') :
            '<div class="no-results"><h3>No books found</h3><p>Try adjusting your search or filters</p></div>';
    }

    function updatePagination(filteredBooks) {
        const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);
        const paginationContainer = document.querySelector('.pagination');
        
        if (totalPages <= 1) {
            paginationContainer.style.display = 'none';
            return;
        }

        paginationContainer.style.display = 'flex';
        let paginationHTML = `
            <button class="page-btn prev-btn" ${currentPage === 1 ? 'disabled' : ''}>
                <i class="fas fa-chevron-left"></i>
            </button>
        `;

        for (let i = 1; i <= totalPages; i++) {
            if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
                paginationHTML += `
                    <button class="page-btn ${i === currentPage ? 'active' : ''}" data-page="${i}">
                        ${i}
                    </button>
                `;
            } else if (i === currentPage - 2 || i === currentPage + 2) {
                paginationHTML += '<span class="page-dots">...</span>';
            }
        }

        paginationHTML += `
            <button class="page-btn next-btn" ${currentPage === totalPages ? 'disabled' : ''}>
                <i class="fas fa-chevron-right"></i>
            </button>
        `;

        paginationContainer.innerHTML = paginationHTML;

        // Add pagination event listeners
        paginationContainer.querySelectorAll('.page-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                if (button.classList.contains('prev-btn') && currentPage > 1) {
                    currentPage--;
                } else if (button.classList.contains('next-btn') && currentPage < totalPages) {
                    currentPage++;
                } else if (!button.classList.contains('prev-btn') && !button.classList.contains('next-btn')) {
                    currentPage = parseInt(button.dataset.page);
                }
                filterAndDisplayBooks();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });
    }

    // Initial display
    filterAndDisplayBooks();
});

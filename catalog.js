// First, let's update the temporary book covers with genre-specific images
const bookCovers = {
    'The Great Gatsby': 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.1',
    'Dune': 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.1',
    'To Kill a Mockingbird': 'https://images.unsplash.com/photo-1476275466078-4007374efbbe?ixlib=rb-4.0.1',
    'The Alchemist': 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.1',
    'The Silent Patient': 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.1',
    'Sapiens': 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.1',
    'The Name of the Wind': 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.1',
    'Atomic Habits': 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.1',
    'The Thursday Murder Club': 'https://images.unsplash.com/photo-1587876931567-564ce588bfbd?ixlib=rb-4.0.1',
    'Project Hail Mary': 'https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?ixlib=rb-4.0.1',
    'default': 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.1'
};

// Complete book collection with added descriptions and cover images
const books = [
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic Literature",
        isbn: "978-0743273565",
        isAvailable: true,
        description: "A story of decadence and excess, Gatsby explores the American Dream in the 1920s.",
        coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.1"
    },
    {
        id: 2,
        title: "Dune",
        author: "Frank Herbert",
        genre: "Science Fiction",
        isbn: "978-0441172719",
        isAvailable: false,
        description: "A stunning blend of adventure and mysticism, environmental awareness and politics.",
        coverImage: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.1"
    },
    {
        id: 3,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Classic Literature",
        isbn: "978-0446310789",
        isAvailable: true,
        description: "A coming-of-age story about a young girl growing up in the Deep South in the 1930s.",
        coverImage: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.1"
    },
    {
        id: 4,
        title: "The Alchemist",
        author: "Paulo Coelho",
        genre: "Philosophy",
        isbn: "978-0062315007",
        isAvailable: true,
        description: "A novel that tells the mystical story of Santiago, an Andalusian shepherd boy who travels to Egypt in search of a treasure buried in the Pyramids.",
        coverImage: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.1"
    },
    {
        id: 5,
        title: "The Silent Patient",
        author: "Alex Michaelides",
        genre: "Thriller",
        isbn: "978-1250301697",
        isAvailable: false,
        description: "A psychological thriller about a woman who stops speaking after she commits a murder.",
        coverImage: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.1"
    },
    {
        id: 6,
        title: "Sapiens",
        author: "Yuval Noah Harari",
        genre: "History",
        isbn: "978-0062316097",
        isAvailable: true,
        description: "A brief history of humankind, from the Stone Age to the 21st century.",
        coverImage: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.1"
    },
    {
        id: 7,
        title: "The Name of the Wind",
        author: "Patrick Rothfuss",
        genre: "Fantasy",
        isbn: "978-0756404741",
        isAvailable: false,
        description: "The first book in the Kingkiller Chronicle, a fantasy series by American author Patrick Rothfuss.",
        coverImage: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.1"
    },
    {
        id: 8,
        title: "Atomic Habits",
        author: "James Clear",
        genre: "Self-Help",
        isbn: "978-0735211292",
        isAvailable: true,
        description: "A book about the habits that can change your life.",
        coverImage: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.1"
    },
    {
        id: 9,
        title: "The Thursday Murder Club",
        author: "Richard Osman",
        genre: "Mystery",
        isbn: "978-1984880963",
        isAvailable: true,
        description: "A cozy mystery novel by British author Richard Osman.",
        coverImage: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.1"
    },
    {
        id: 10,
        title: "Project Hail Mary",
        author: "Andy Weir",
        genre: "Science Fiction",
        isbn: "978-0593135204",
        isAvailable: false,
        description: "A science fiction novel by American author Andy Weir.",
        coverImage: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.1"
    },
    {
        id: 11,
        title: "The Psychology of Money",
        author: "Morgan Housel",
        genre: "Finance",
        isbn: "978-0857197689",
        isAvailable: true,
        description: "A book about the psychology of money and how it affects our behavior.",
        coverImage: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.1"
    },
    {
        id: 12,
        title: "The Midnight Library",
        author: "Matt Haig",
        genre: "Contemporary Fiction",
        isbn: "978-0525559474",
        isAvailable: true,
        description: "A novel about a woman who finds herself in a library that offers her the chance to live out her alternative lives.",
        coverImage: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.1"
    },
    {
        id: 13,
        title: "The Road",
        author: "Cormac McCarthy",
        genre: "Post-Apocalyptic",
        isbn: "978-0307387899",
        isAvailable: true,
        description: "A post-apocalyptic novel by American author Cormac McCarthy.",
        coverImage: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.1"
    },
    {
        id: 14,
        title: "The Joy of Cooking",
        author: "Irma S. Rombauer",
        genre: "Cooking",
        isbn: "978-0743246262",
        isAvailable: false,
        description: "A cookbook that has been in continuous publication since 1931.",
        coverImage: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.1"
    },
    {
        id: 15,
        title: "Watchmen",
        author: "Alan Moore",
        genre: "Comics & Graphic Novels",
        isbn: "978-1401245250",
        isAvailable: true,
        description: "A graphic novel by British writer Alan Moore and American artist Dave Gibbons.",
        coverImage: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.1"
    },
    {
        id: 16,
        title: "The Sun and Her Flowers",
        author: "Rupi Kaur",
        genre: "Poetry",
        isbn: "978-1449486792",
        isAvailable: true,
        description: "A collection of poetry by Canadian author Rupi Kaur.",
        coverImage: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.1"
    },
    {
        id: 17,
        title: "Humans of New York",
        author: "Brandon Stanton",
        genre: "Art & Photography",
        isbn: "978-1250038821",
        isAvailable: false,
        description: "A collection of photographs and stories about people living in New York City.",
        coverImage: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.1"
    },
    {
        id: 18,
        title: "Into Thin Air",
        author: "Jon Krakauer",
        genre: "Travel & Adventure",
        isbn: "978-0385494786",
        isAvailable: true,
        description: "A book about the 1996 Mount Everest disaster.",
        coverImage: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.1"
    },
    {
        id: 19,
        title: "Good to Great",
        author: "Jim Collins",
        genre: "Business",
        isbn: "978-0066620992",
        isAvailable: true,
        description: "A book about how companies can achieve greatness.",
        coverImage: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.1"
    },
    {
        id: 20,
        title: "The Glass Castle",
        author: "Jeannette Walls",
        genre: "Memoir",
        isbn: "978-0743247542",
        isAvailable: false,
        description: "A memoir about growing up in a dysfunctional family.",
        coverImage: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.1"
    },
    {
        id: 21,
        title: "The Elements of Style",
        author: "Strunk & White",
        genre: "Reference",
        isbn: "978-0205309023",
        isAvailable: true,
        description: "A book about the elements of good style in writing.",
        coverImage: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.1"
    },
    {
        id: 22,
        title: "The Power of Now",
        author: "Eckhart Tolle",
        genre: "Spirituality",
        isbn: "978-1577314806",
        isAvailable: true,
        description: "A book about living in the present moment.",
        coverImage: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.1"
    },
    {
        id: 23,
        title: "The Complete Shakespeare",
        author: "William Shakespeare",
        genre: "Drama",
        isbn: "978-0199267170",
        isAvailable: false,
        description: "A collection of all of Shakespeare's plays and poems.",
        coverImage: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.1"
    },
    {
        id: 24,
        title: "The World Atlas of Coffee",
        author: "James Hoffmann",
        genre: "Food & Drink",
        isbn: "978-0228100942",
        isAvailable: true,
        description: "A book about coffee and its history.",
        coverImage: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.1"
    }
];

// Add this function to handle navigation highlighting
function updateNavigation() {
    const currentPage = window.location.pathname.split('/').pop();
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
    // Update navigation
    updateNavigation();

    // Update header logo
    const logoImg = document.querySelector('.logo-img');
    if (logoImg) {
        logoImg.src = 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.1';
        logoImg.onerror = function() {
            this.src = 'https://via.placeholder.com/40x40?text=Library';
        };
    }

    const searchInput = document.querySelector('.search-input');
    const genreFilter = document.getElementById('genre-filter');
    const statusFilter = document.getElementById('status-filter');
    const catalogGrid = document.querySelector('.catalog-grid');
    const itemsPerPage = 9; // Changed to 9 for 3x3 grid
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
        const searchTerm = document.querySelector('.search-input').value.toLowerCase();
        const selectedGenre = document.getElementById('genre-filter').value;
        const selectedStatus = document.getElementById('status-filter').value;

        const filteredBooks = books.filter(book => {
            const matchesSearch = 
                book.title.toLowerCase().includes(searchTerm) ||
                book.author.toLowerCase().includes(searchTerm) ||
                book.isbn.toLowerCase().includes(searchTerm);
            const matchesGenre = !selectedGenre || book.genre === selectedGenre;
            const matchesStatus = !selectedStatus || 
                (selectedStatus === 'available' ? book.isAvailable : !book.isAvailable);

            return matchesSearch && matchesGenre && matchesStatus;
        });

        displayBooks(filteredBooks);
        updatePagination(filteredBooks);
    }

    function displayBooks(filteredBooks) {
        const catalogGrid = document.querySelector('.catalog-grid');
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const booksToShow = filteredBooks.slice(start, end);

        if (booksToShow.length === 0) {
            catalogGrid.innerHTML = `
                <div class="no-results">
                    <h3>No books found</h3>
                    <p>Try adjusting your search or filters</p>
                </div>`;
            return;
        }

        catalogGrid.innerHTML = booksToShow.map(book => {
            // Get cover image based on book title
            const coverImage = bookCovers[book.title] || bookCovers['default'];
            
            return `
                <div class="book-card" data-book-id="${book.id}">
                    <div class="book-cover">
                        <img src="${coverImage}" 
                             alt="${book.title} cover" 
                             onerror="this.src='https://via.placeholder.com/400x600?text=No+Cover+Available'"
                             loading="lazy">
                    </div>
                    <div class="book-info">
                        <h3>${book.title}</h3>
                        <p><i class="fas fa-user"></i> ${book.author}</p>
                        <p><i class="fas fa-bookmark"></i> ${book.genre}</p>
                        <span class="book-status ${book.isAvailable ? 'status-available' : 'status-borrowed'}">
                            ${book.isAvailable ? 'Available' : 'Borrowed'}
                        </span>
                    </div>
                </div>
            `;
        }).join('');

        // Add click event listeners to the new cards
        document.querySelectorAll('.book-card').forEach(card => {
            card.addEventListener('click', () => {
                const bookId = parseInt(card.dataset.bookId);
                const book = books.find(b => b.id === bookId);
                if (book) {
                    showBookDetails(book);
                }
            });
        });
    }

    function showBookDetails(book) {
        // Get cover image based on book title
        const coverImage = bookCovers[book.title] || bookCovers['default'];
        
        const modal = document.querySelector('.modal');
        const modalContent = `
            <div class="modal-content-wrapper">
                <div class="modal-book-cover">
                    <img src="${coverImage}" 
                         alt="${book.title} cover"
                         onerror="this.src='https://via.placeholder.com/400x600?text=No+Cover+Available'">
                </div>
                <div class="modal-book-info">
                    <h2>${book.title}</h2>
                    <p class="book-author"><i class="fas fa-user"></i> ${book.author}</p>
                    <p class="book-genre"><i class="fas fa-bookmark"></i> ${book.genre || 'General'}</p>
                    <p class="book-isbn"><i class="fas fa-barcode"></i> ISBN: ${book.isbn}</p>
                    <p class="book-status ${book.isAvailable ? 'status-available' : 'status-borrowed'}">
                        ${book.isAvailable ? 'Available' : 'Borrowed'}
                    </p>
                    <p class="book-description">${book.description || 'No description available.'}</p>
                </div>
            </div>
        `;

        modal.querySelector('.modal-content').innerHTML = modalContent;
        modal.style.display = 'flex';
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

    // Initialize modal close functionality
    document.querySelector('.close-modal').addEventListener('click', () => {
        document.querySelector('.modal').style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        const modal = document.querySelector('.modal');
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Initial display
    filterAndDisplayBooks();

    // Add scroll event listener for header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.library-header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Update the additionalStyles with new modal image sizing
    const additionalStyles = `
        <style>
            .no-results {
                grid-column: 1 / -1;
                text-align: center;
                padding: 2rem;
                background: rgba(255, 255, 255, 0.9);
                border-radius: 8px;
            }

            .book-card {
                cursor: pointer;
                transition: transform 0.3s ease, box-shadow 0.3s ease;
            }

            .book-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
            }

            .book-info h3 {
                font-size: 1.2rem;
                margin-bottom: 0.5rem;
                color: white;
            }

            .book-status {
                display: inline-block;
                padding: 0.25rem 0.75rem;
                border-radius: 20px;
                font-size: 0.8rem;
                font-weight: 600;
            }

            .status-available {
                background-color: #4CAF50;
                color: white;
            }

            .status-borrowed {
                background-color: #f44336;
                color: white;
            }

            /* Modal styles */
            .modal-content {
                max-width: 800px;
                margin: auto;
                padding: 20px;
            }

            .modal-content-wrapper {
                display: flex;
                gap: 20px;
                align-items: flex-start;
            }

            .modal-book-cover {
                flex: 0 0 200px; /* Fixed width for cover */
                max-width: 200px;
            }

            .modal-book-cover img {
                width: 100%;
                height: auto;
                max-height: 300px;
                object-fit: cover;
                border-radius: 8px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            }

            .modal-book-info {
                flex: 1;
                padding: 0 20px;
            }

            .modal-book-info h2 {
                margin-top: 0;
                color: var(--primary-color);
                font-size: 1.5rem;
            }

            /* Responsive modal */
            @media (max-width: 768px) {
                .modal-content-wrapper {
                    flex-direction: column;
                    align-items: center;
                }

                .modal-book-cover {
                    max-width: 150px;
                }

                .modal-book-info {
                    padding: 20px 0 0 0;
                    text-align: center;
                }
            }
        </style>
    `;

    // Add this to your DOMContentLoaded event handler
    document.head.insertAdjacentHTML('beforeend', additionalStyles);
});

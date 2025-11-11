// Discussion Forum JavaScript

// Mock data for discussions
const mockDiscussions = [
    {
        id: 1,
        title: "Best practices for teaching indigenous languages in schools",
        author: "Sarah Mwangi",
        category: "education",
        content: "I've been working on implementing Khoekhoe language classes in primary schools. What strategies have worked well for others? I'm particularly interested in methods that engage students and make learning fun while respecting cultural traditions.",
        excerpt: "I've been working on implementing Khoekhoe language classes in primary schools. What strategies have worked well for others?",
        replies: 23,
        views: 456,
        likes: 18,
        timestamp: "2 hours ago",
        tags: ["education", "teaching", "schools"],
        replyList: [
            {
                id: 1,
                author: "Michael Tjiposa",
                content: "Great question! 😊 We've had success using **storytelling sessions** with elders. The children love hearing traditional stories in their native language.",
                timestamp: "1 hour ago",
                likes: 5
            },
            {
                id: 2,
                author: "Linda Hamutenya",
                content: "I recommend incorporating *songs and games* 🎵. Music makes language learning more engaging and helps with pronunciation!",
                timestamp: "45 minutes ago",
                likes: 3
            }
        ]
    },
    {
        id: 2,
        title: "Digital tools for language documentation",
        author: "John Kamati",
        category: "technology",
        content: "Looking for recommendations on software and apps that can help with recording and archiving indigenous languages. We need tools that are user-friendly and accessible to community members.",
        excerpt: "Looking for recommendations on software and apps that can help with recording and archiving indigenous languages.",
        replies: 15,
        views: 342,
        likes: 12,
        timestamp: "5 hours ago",
        tags: ["technology", "documentation", "tools"],
        replyList: [
            {
                id: 1,
                author: "Emma Shikongo",
                content: "Check out **SayMore** and **ELAN** 💻 - both are excellent for language documentation and annotation!",
                timestamp: "3 hours ago",
                likes: 7
            }
        ]
    },
    {
        id: 3,
        title: "Preserving oral traditions in the digital age",
        author: "Maria Santos",
        category: "culture",
        content: "How can we balance traditional oral storytelling with modern digital preservation methods? I'm concerned about losing the essence of oral traditions when we digitize them.",
        excerpt: "How can we balance traditional oral storytelling with modern digital preservation methods?",
        replies: 31,
        views: 678,
        likes: 27,
        timestamp: "1 day ago",
        tags: ["culture", "oral traditions", "digital"],
        replyList: []
    },
    {
        id: 4,
        title: "Government funding opportunities for language projects",
        author: "David Nghidinwa",
        category: "policy",
        content: "Has anyone successfully applied for grants to support indigenous language initiatives? Share your experiences! I'd love to hear about the application process and any tips.",
        excerpt: "Has anyone successfully applied for grants to support indigenous language initiatives? Share your experiences!",
        replies: 19,
        views: 523,
        likes: 22,
        timestamp: "1 day ago",
        tags: ["policy", "funding", "grants"],
        replyList: []
    },
    {
        id: 5,
        title: "Creating bilingual educational materials",
        author: "Anna Tjitemisa",
        category: "education",
        content: "We're developing textbooks in both English and Otjiherero. What are the key considerations? Looking for advice on layout, terminology, and cultural sensitivity.",
        excerpt: "We're developing textbooks in both English and Otjiherero. What are the key considerations?",
        replies: 28,
        views: 612,
        likes: 25,
        timestamp: "2 days ago",
        tags: ["education", "bilingual", "materials"],
        replyList: []
    },
    {
        id: 6,
        title: "Youth engagement in language preservation",
        author: "Peter Uutoni",
        category: "languages",
        content: "How do we get younger generations excited about learning and preserving their ancestral languages? Many young people see indigenous languages as old-fashioned.",
        excerpt: "How do we get younger generations excited about learning and preserving their ancestral languages?",
        replies: 42,
        views: 891,
        likes: 38,
        timestamp: "3 days ago",
        tags: ["youth", "engagement", "preservation"],
        replyList: []
    }
];

let currentCategory = 'all';
let currentSort = 'recent';

document.addEventListener('DOMContentLoaded', function() {
    // Initialize
    loadDiscussions();
    setupEventListeners();
});

function setupEventListeners() {
    // New Post Button
    const newPostBtn = document.getElementById('newPostBtn');
    const newPostModal = document.getElementById('newPostModal');
    const closeModal = document.getElementById('closeModal');
    const cancelBtn = document.getElementById('cancelBtn');
    const newPostForm = document.getElementById('newPostForm');
    
    if (newPostBtn) {
        newPostBtn.addEventListener('click', () => {
            newPostModal.classList.add('show');
        });
    }
    
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            newPostModal.classList.remove('show');
        });
    }
    
    if (cancelBtn) {
        cancelBtn.addEventListener('click', () => {
            newPostModal.classList.remove('show');
        });
    }
    
    // Discussion Detail Modal
    const detailModal = document.getElementById('discussionDetailModal');
    const closeDetailModal = document.getElementById('closeDetailModal');
    const replyForm = document.getElementById('replyForm');
    
    if (closeDetailModal) {
        closeDetailModal.addEventListener('click', () => {
            detailModal.classList.remove('show');
        });
    }
    
    if (replyForm) {
        replyForm.addEventListener('submit', handleReplySubmit);
    }
    
    // Close modals on outside click
    window.addEventListener('click', (e) => {
        if (e.target === newPostModal) {
            newPostModal.classList.remove('show');
        }
        if (e.target === detailModal) {
            detailModal.classList.remove('show');
        }
    });
    
    // Form submission
    if (newPostForm) {
        newPostForm.addEventListener('submit', handleNewPost);
    }
    
    // Category filters
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            categoryCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            currentCategory = card.dataset.category;
            loadDiscussions();
        });
    });
    
    // Sort filter
    const sortFilter = document.getElementById('sortFilter');
    if (sortFilter) {
        sortFilter.addEventListener('change', (e) => {
            currentSort = e.target.value;
            loadDiscussions();
        });
    }
}

function loadDiscussions() {
    const discussionsList = document.getElementById('discussionsList');
    if (!discussionsList) return;
    
    // Filter discussions
    let filteredDiscussions = mockDiscussions;
    if (currentCategory !== 'all') {
        filteredDiscussions = mockDiscussions.filter(d => d.category === currentCategory);
    }
    
    // Sort discussions
    if (currentSort === 'popular') {
        filteredDiscussions.sort((a, b) => b.likes - a.likes);
    } else if (currentSort === 'active') {
        filteredDiscussions.sort((a, b) => b.replies - a.replies);
    }
    
    // Clear and render
    discussionsList.innerHTML = '';
    
    if (filteredDiscussions.length === 0) {
        discussionsList.innerHTML = '<p style="text-align: center; padding: 2rem; color: var(--dark-gray);">No discussions found in this category.</p>';
        return;
    }
    
    filteredDiscussions.forEach((discussion, index) => {
        const discussionItem = createDiscussionItem(discussion, index);
        discussionsList.appendChild(discussionItem);
    });
}

function createDiscussionItem(discussion, index) {
    const item = document.createElement('div');
    item.className = 'discussion-item';
    item.style.animationDelay = `${index * 0.1}s`;
    
    item.innerHTML = `
        <div class="discussion-header-info">
            <div class="discussion-main">
                <h3 class="discussion-title">${discussion.title}</h3>
                <div class="discussion-meta">
                    <span class="meta-item">👤 ${discussion.author}</span>
                    <span class="meta-item">🕒 ${discussion.timestamp}</span>
                </div>
                <p class="discussion-excerpt">${discussion.excerpt}</p>
            </div>
        </div>
        <div class="discussion-footer">
            <div class="discussion-tags">
                ${discussion.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <div class="discussion-stats">
                <span class="stat">💬 ${discussion.replyList ? discussion.replyList.length : discussion.replies}</span>
                <span class="stat">👁️ ${discussion.views}</span>
                <span class="stat">❤️ ${discussion.likes}</span>
            </div>
        </div>
    `;
    
    // Add click handler to open discussion detail
    item.addEventListener('click', () => openDiscussionDetail(discussion));
    
    return item;
}

function handleNewPost(e) {
    e.preventDefault();
    
    const formData = {
        title: document.getElementById('postTitle').value,
        category: document.getElementById('postCategory').value,
        content: document.getElementById('postContent').value,
        author: document.getElementById('postAuthor').value
    };
    
    // Validate
    if (!formData.title || !formData.category || !formData.content || !formData.author) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Create new discussion object
    const newDiscussion = {
        id: mockDiscussions.length + 1,
        title: formData.title,
        author: formData.author,
        category: formData.category,
        excerpt: formData.content.substring(0, 150) + (formData.content.length > 150 ? '...' : ''),
        replies: 0,
        views: 0,
        likes: 0,
        timestamp: 'Just now',
        tags: [formData.category]
    };
    
    // Add to beginning of array
    mockDiscussions.unshift(newDiscussion);
    
    // Close modal
    const modal = document.getElementById('newPostModal');
    modal.classList.remove('show');
    
    // Reset form
    e.target.reset();
    
    // Reload discussions
    loadDiscussions();
    
    // Show success message
    showSuccessMessage('Your discussion has been posted successfully!');
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showSuccessMessage(message) {
    const successDiv = document.createElement('div');
    successDiv.style.cssText = `
        position: fixed;
        top: 120px;
        right: 20px;
        background: #d4edda;
        border: 1px solid #c3e6cb;
        color: #155724;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    successDiv.textContent = message;
    
    document.body.appendChild(successDiv);
    
    setTimeout(() => {
        successDiv.remove();
    }, 4000);
}

// Discussion Detail View
function openDiscussionDetail(discussion) {
    const modal = document.getElementById('discussionDetailModal');
    if (!modal) return;
    
    // Update modal content
    document.getElementById('detailTitle').textContent = discussion.title;
    document.getElementById('detailAuthor').textContent = discussion.author;
    document.getElementById('detailTimestamp').textContent = discussion.timestamp;
    document.getElementById('detailContent').innerHTML = formatText(discussion.content);
    document.getElementById('detailCategory').textContent = discussion.category;
    
    // Load replies
    loadReplies(discussion);
    
    // Store current discussion ID
    modal.dataset.discussionId = discussion.id;
    
    // Show modal
    modal.classList.add('show');
}

function loadReplies(discussion) {
    const repliesContainer = document.getElementById('repliesContainer');
    if (!repliesContainer) return;
    
    repliesContainer.innerHTML = '';
    
    if (!discussion.replyList || discussion.replyList.length === 0) {
        repliesContainer.innerHTML = '<p class="no-replies">No replies yet. Be the first to reply!</p>';
        return;
    }
    
    discussion.replyList.forEach(reply => {
        const replyElement = createReplyElement(reply);
        repliesContainer.appendChild(replyElement);
    });
}

function createReplyElement(reply) {
    const replyDiv = document.createElement('div');
    replyDiv.className = 'reply-item';
    
    replyDiv.innerHTML = `
        <div class="reply-header">
            <div class="reply-author">
                <span class="author-avatar">👤</span>
                <div class="author-info">
                    <strong>${reply.author}</strong>
                    <span class="reply-timestamp">${reply.timestamp}</span>
                </div>
            </div>
            <button class="reply-like-btn" data-likes="${reply.likes}">
                ❤️ ${reply.likes}
            </button>
        </div>
        <div class="reply-content">${formatText(reply.content)}</div>
    `;
    
    return replyDiv;
}

function formatText(text) {
    // Convert markdown-style formatting to HTML
    let formatted = text;
    
    // Bold: **text** -> <strong>text</strong>
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Italic: *text* -> <em>text</em>
    formatted = formatted.replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    // Line breaks
    formatted = formatted.replace(/\n/g, '<br>');
    
    return formatted;
}

function handleReplySubmit(e) {
    e.preventDefault();
    
    const modal = document.getElementById('discussionDetailModal');
    const discussionId = parseInt(modal.dataset.discussionId);
    const discussion = mockDiscussions.find(d => d.id === discussionId);
    
    if (!discussion) return;
    
    const replyContent = document.getElementById('replyContent').value;
    const replyAuthor = document.getElementById('replyAuthor').value;
    
    if (!replyContent || !replyAuthor) {
        alert('Please fill in all fields.');
        return;
    }
    
    // Create new reply
    const newReply = {
        id: (discussion.replyList ? discussion.replyList.length : 0) + 1,
        author: replyAuthor,
        content: replyContent,
        timestamp: 'Just now',
        likes: 0
    };
    
    // Initialize replyList if it doesn't exist
    if (!discussion.replyList) {
        discussion.replyList = [];
    }
    
    // Add reply
    discussion.replyList.push(newReply);
    discussion.replies = discussion.replyList.length;
    
    // Reload replies
    loadReplies(discussion);
    
    // Clear form
    document.getElementById('replyContent').value = '';
    document.getElementById('replyAuthor').value = '';
    
    // Show success message
    showSuccessMessage('Your reply has been posted!');
    
    // Scroll to bottom of replies
    const repliesContainer = document.getElementById('repliesContainer');
    repliesContainer.scrollTop = repliesContainer.scrollHeight;
}

// Text formatting functions
function insertFormatting(type) {
    const textarea = document.getElementById('replyContent');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);
    let formattedText = '';
    
    switch(type) {
        case 'bold':
            formattedText = `**${selectedText || 'bold text'}**`;
            break;
        case 'italic':
            formattedText = `*${selectedText || 'italic text'}*`;
            break;
    }
    
    textarea.value = textarea.value.substring(0, start) + formattedText + textarea.value.substring(end);
    textarea.focus();
    
    // Set cursor position
    const newPos = start + formattedText.length;
    textarea.setSelectionRange(newPos, newPos);
}

function insertEmoji(emoji) {
    const textarea = document.getElementById('replyContent');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    
    textarea.value = textarea.value.substring(0, start) + emoji + textarea.value.substring(end);
    textarea.focus();
    
    // Set cursor position after emoji
    const newPos = start + emoji.length;
    textarea.setSelectionRange(newPos, newPos);
}

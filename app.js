// Modern Gensyn AI Chat Application with Debug Features
class GensynChat {
    constructor() {
        // Add console logging for debugging
        console.log('🚀 Gensyn AI ChatBot initializing...');
        
        this.messages = [
            { id: this.generateId(), sender: 'bot', text: "Hi! I'm Gensyn AI, your guide to decentralized machine intelligence. What would you like to explore today?", timestamp: new Date() }
        ];
        this.isLoading = false;
        this.typingIndicator = null;
        
        try {
            this.initializeElements();
            this.bindEvents();
            this.setCurrentYear();
            this.initializeWelcomeTimestamp();
            this.addEnhancedFeatures();
            console.log('✅ Gensyn AI ChatBot initialized successfully');
        } catch (error) {
            console.error('❌ Error initializing Gensyn AI ChatBot:', error);
            this.handleInitializationError(error);
        }
        
        // Enhanced response database with sophisticated AI-like responses
        this.conversationHistory = [];
        this.responses = {
            general_intro: "Gensyn is building the world's first decentralized machine learning compute protocol. We're creating a peer-to-peer network where anyone can contribute computational resources and participate in training AI models while earning rewards through our blockchain-based incentive system. This represents a fundamental shift from the current centralized AI development paradigm dominated by large tech companies.\n\nOur protocol addresses several critical challenges in the AI ecosystem: compute accessibility, training transparency, cost reduction, and democratic participation in AI development. By leveraging blockchain technology for coordination and verification, we're creating a trustless environment where participants can collaborate on training state-of-the-art models without needing to trust individual actors.",
            
            technical_details: "Our protocol implements a sophisticated combination of verifiable compute proofs and economic incentives to coordinate distributed GPU resources. At the core, we use cryptographic verification of training work through a novel proof-of-learning mechanism that ensures all participants contribute legitimate computational effort.\n\nThe technical architecture consists of three main layers: the consensus layer (blockchain-based coordination), the verification layer (cryptographic proof validation), and the execution layer (distributed training orchestration). We've developed custom protocols for gradient aggregation, model checkpointing, and byzantine fault tolerance to ensure training remains robust even with unreliable or malicious participants.\n\nOur smart contracts manage resource allocation, task distribution, and reward calculation automatically. The protocol supports various training paradigms including federated learning, distributed training, and parameter server architectures.",
            
            decentralized_ai: "Traditional AI development suffers from significant centralization issues. A handful of companies control the vast majority of compute resources, datasets, and talent necessary for training large-scale models. This creates barriers to entry, limits innovation, and concentrates power in the hands of a few entities.\n\nGensyn democratizes this by allowing individuals and organizations worldwide to pool their computing resources. Participants can contribute anything from a single GPU to entire data centers, creating a more resilient and accessible AI ecosystem. This distributed approach offers several advantages: reduced costs through competition, increased innovation through diverse participation, geographic distribution for better latency, and resistance to single points of failure.\n\nMoreover, decentralized AI training enables new forms of collaboration and data sharing while preserving privacy through techniques like differential privacy and secure multi-party computation.",
            
            blockchain_integration: "We leverage blockchain technology not just for payments, but as the foundational coordination layer for our distributed training network. Smart contracts manage the entire lifecycle of training jobs: from resource allocation and task assignment to progress verification and reward distribution.\n\nOur consensus mechanism is specifically designed for ML workloads, incorporating proof-of-learning algorithms that verify computational work has been performed correctly. This prevents various attack vectors including lazy evaluation, gradient manipulation, and model poisoning.\n\nThe blockchain also serves as an immutable audit trail for all training activities, enabling transparent and reproducible AI development. Researchers can verify exactly how models were trained, which data was used, and which participants contributed to the final result. This level of transparency is impossible with traditional centralized training approaches.\n\nTokenomics play a crucial role in aligning incentives: compute providers earn tokens for honest participation, while model trainers pay for resources. The token economy creates natural market dynamics for pricing compute resources and ensures sustainable network growth.",
            
            community_governance: "The Gensyn network is governed by its participants through a sophisticated decentralized autonomous organization (DAO) structure. Token holders can propose and vote on protocol upgrades, economic parameter adjustments, and strategic decisions about the platform's future.\n\nGovernance extends beyond simple voting to include technical committees, research working groups, and community councils that handle different aspects of the protocol. We've implemented quadratic voting mechanisms to prevent plutocracy and ensure smaller stakeholders have meaningful representation.\n\nProposal types include: protocol upgrades (consensus rules, verification algorithms), economic parameters (reward rates, transaction fees), integration approvals (new model architectures, hardware support), and community initiatives (grants, partnerships, educational programs).\n\nThe governance system is designed to evolve with the community's needs while maintaining the protocol's core principles of decentralization, transparency, and open participation.",
            
            compute_market: "Our marketplace creates a dynamic, efficient market for AI compute resources. The protocol automatically matches compute providers with training tasks based on hardware specifications, geographic location, availability, and pricing preferences.\n\nThe matching algorithm considers multiple factors: computational requirements (GPU memory, processing power, network bandwidth), quality metrics (historical performance, reliability scores), economic factors (pricing, payment terms), and task-specific needs (privacy requirements, regulatory compliance).\n\nPayments are handled through smart contracts with escrow mechanisms, ensuring providers are compensated for their work while protecting consumers from poor service. Our reputation system tracks participant behavior over time, creating incentives for high-quality service provision.\n\nThe marketplace supports various pricing models: fixed pricing, auction-based allocation, long-term contracts, and spot pricing for excess capacity. This flexibility allows both casual participants and professional compute providers to find suitable arrangements."
        };
    }
    
    generateId() {
        return Math.random().toString(36).substr(2, 9);
    }
    
    initializeWelcomeTimestamp() {
        const welcomeTimestamp = document.getElementById('welcomeTimestamp');
        if (welcomeTimestamp) {
            welcomeTimestamp.textContent = this.formatTimestamp(new Date());
        }
    }
    
    handleInitializationError(error) {
        console.error('Handling initialization error:', error);
        // Ensure basic functionality even if some features fail
        this.ensureBasicFunctionality();
    }
    
    ensureBasicFunctionality() {
        console.log('🔧 Setting up basic functionality...');
        
        // Ensure body has proper styles
        document.body.style.backgroundColor = '#1a1a1a';
        document.body.style.color = '#ffffff';
        document.body.style.fontFamily = 'Arial, sans-serif';
        document.body.style.margin = '0';
        document.body.style.padding = '0';
        
        // Ensure basic elements exist
        if (!document.getElementById('messages')) {
            console.warn('Messages container not found');
        }
        if (!document.getElementById('messageInput')) {
            console.warn('Message input not found');
        }
        if (!document.getElementById('sendButton')) {
            console.warn('Send button not found');
        }
    }

    addEnhancedFeatures() {
        try {
            // Add keyboard shortcuts
            document.addEventListener('keydown', (e) => {
                if (e.ctrlKey || e.metaKey) {
                    if (e.key === 'k') {
                        e.preventDefault();
                        this.focusInput();
                    }
                }
                if (e.key === 'Escape') {
                    if (this.messageInput) this.messageInput.blur();
                }
            });
            
            // Add smooth scrolling for messages
            this.setupSmoothScrolling();
            
            // Initialize typing indicator
            this.typingIndicator = document.getElementById('typingIndicator');
            
            // Add message character counter
            this.setupCharacterCounter();
            
            console.log('✅ Enhanced features added successfully');
        } catch (error) {
            console.error('❌ Error adding enhanced features:', error);
        }
    }
    
    setupSmoothScrolling() {
        let isScrolling = false;
        this.messagesContainer.addEventListener('scroll', () => {
            if (!isScrolling) {
                window.requestAnimationFrame(() => {
                    isScrolling = false;
                });
                isScrolling = true;
            }
        });
    }
    
    setupCharacterCounter() {
        this.messageInput.addEventListener('input', () => {
            const length = this.messageInput.value.length;
            const maxLength = this.messageInput.maxLength;
            
            // Add visual feedback when approaching limit
            if (length > maxLength * 0.8) {
                this.messageInput.style.borderColor = 'var(--gensyn-orange)';
            } else {
                this.messageInput.style.borderColor = '';
            }
        });
    }
    
    focusInput() {
        this.messageInput.focus();
        this.messageInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    
    formatTimestamp(date) {
        return date.toLocaleTimeString('en-US', { 
            hour: 'numeric', 
            minute: '2-digit',
            hour12: true 
        });
    }
    
    initializeElements() {
        console.log('🔍 Initializing elements...');
        
        this.messagesContainer = document.getElementById('messages');
        this.messageInput = document.getElementById('messageInput');
        this.sendButton = document.getElementById('sendButton');
        
        // Check if critical elements exist
        if (!this.messagesContainer) {
            console.error('❌ Messages container not found');
            throw new Error('Messages container not found');
        }
        if (!this.messageInput) {
            console.error('❌ Message input not found');
            throw new Error('Message input not found');
        }
        if (!this.sendButton) {
            console.error('❌ Send button not found');
            throw new Error('Send button not found');
        }
        
        this.btnText = this.sendButton.querySelector('.btn-text');
        this.btnLoading = this.sendButton.querySelector('.btn-loading');
        
        // Enhanced elements (optional)
        this.typingIndicator = document.getElementById('typingIndicator');
        
        console.log('✅ Elements initialized successfully');
    }
    
    bindEvents() {
        this.sendButton.addEventListener('click', () => this.sendMessage());
        
        this.messageInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });
        
        // Enhanced auto-resize textarea with animation
        this.messageInput.addEventListener('input', (e) => {
            this.autoResizeTextarea();
            this.handleInputFeedback();
        });
        
        // Add focus/blur effects
        this.messageInput.addEventListener('focus', () => {
            this.messageInput.parentElement.classList.add('focused');
        });
        
        this.messageInput.addEventListener('blur', () => {
            this.messageInput.parentElement.classList.remove('focused');
        });
        
        // Add button hover effects
        this.sendButton.addEventListener('mouseenter', () => {
            if (!this.isLoading) {
                this.sendButton.style.transform = 'translateY(-2px) scale(1.05)';
            }
        });
        
        this.sendButton.addEventListener('mouseleave', () => {
            if (!this.isLoading) {
                this.sendButton.style.transform = '';
            }
        });
    }
    
    autoResizeTextarea() {
        this.messageInput.style.height = 'auto';
        const newHeight = Math.min(this.messageInput.scrollHeight, 120);
        this.messageInput.style.height = newHeight + 'px';
        
        // Smooth animation
        this.messageInput.style.transition = 'height 0.2s ease';
        setTimeout(() => {
            this.messageInput.style.transition = '';
        }, 200);
    }
    
    handleInputFeedback() {
        const text = this.messageInput.value.trim();
        
        // Update send button state
        if (text.length > 0) {
            this.sendButton.classList.add('active');
        } else {
            this.sendButton.classList.remove('active');
        }
        
        // Add typing indication (future feature)
        if (text.length > 2) {
            this.sendButton.style.boxShadow = 'var(--shadow-md), 0 0 20px rgba(59, 130, 246, 0.4)';
        } else {
            this.sendButton.style.boxShadow = '';
        }
    }
    
    setCurrentYear() {
        document.getElementById('currentYear').textContent = new Date().getFullYear();
    }
    
    async sendMessage() {
        if (this.isLoading) return;
        
        const text = this.messageInput.value.trim();
        if (!text) return;
        
        // Add user message with timestamp
        const userMessage = {
            id: this.generateId(),
            sender: 'user',
            text: text,
            timestamp: new Date()
        };
        
        this.addMessage(userMessage);
        this.messageInput.value = '';
        this.messageInput.style.height = 'auto';
        this.handleInputFeedback();
        
        // Show enhanced loading state
        this.setLoading(true);
        this.showTypingIndicator();
        
        // Add to conversation history for context
        this.conversationHistory.push({ role: 'user', text: text });
        
        // Simulate more realistic typing delay based on response length
        const response = this.generateSophisticatedResponse(text);
        const typingDelay = Math.min(3000, Math.max(1500, response.length * 20));
        
        setTimeout(() => {
            this.hideTypingIndicator();
            
            const botMessage = {
                id: this.generateId(),
                sender: 'bot',
                text: response,
                timestamp: new Date()
            };
            
            // Add bot response to history
            this.conversationHistory.push({ role: 'assistant', text: response });
            
            this.addMessage(botMessage);
            this.setLoading(false);
            
            // Focus back to input for continued conversation
            setTimeout(() => {
                this.messageInput.focus();
            }, 500);
        }, typingDelay);
    }
    
    showTypingIndicator() {
        if (this.typingIndicator) {
            this.typingIndicator.classList.remove('hidden');
            this.typingIndicator.classList.add('fade-in');
            this.scrollToBottom(true);
        }
    }
    
    hideTypingIndicator() {
        if (this.typingIndicator) {
            this.typingIndicator.classList.add('hidden');
            this.typingIndicator.classList.remove('fade-in');
        }
    }
    
    addMessage(message) {
        this.messages.push(message);
        this.renderMessage(message);
        this.scrollToBottom();
    }
    
    renderMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${message.sender}`;
        messageDiv.setAttribute('data-message-id', message.id);
        
        // Create bubble with enhanced styling
        const bubbleClass = message.sender === 'bot' && message.text.includes('Gensyn AI') ? 'bubble welcome-message' : 'bubble';
        
        const timestamp = message.timestamp ? this.formatTimestamp(message.timestamp) : '';
        
        messageDiv.innerHTML = `
            <div class="${bubbleClass}">
                ${this.escapeHtml(message.text)}
                <div class="message-actions">
                    <button class="copy-btn" onclick="gensynChat.copyMessage('${message.id}')" title="Copy message">
                        Copy
                    </button>
                </div>
            </div>
            ${timestamp ? `<div class="message-timestamp">${timestamp}</div>` : ''}
        `;
        
        // Add entrance animation
        messageDiv.style.opacity = '0';
        messageDiv.style.transform = 'translateY(10px)';
        
        this.messagesContainer.appendChild(messageDiv);
        
        // Trigger entrance animation
        setTimeout(() => {
            messageDiv.style.transition = 'all 0.3s ease';
            messageDiv.style.opacity = '1';
            messageDiv.style.transform = 'translateY(0)';
        }, 50);
    }
    
    copyMessage(messageId) {
        const message = this.messages.find(m => m.id === messageId);
        if (message) {
            navigator.clipboard.writeText(message.text).then(() => {
                this.showToast('Message copied to clipboard!');
            }).catch(() => {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = message.text;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                this.showToast('Message copied to clipboard!');
            });
        }
    }
    
    showToast(message) {
        const toast = document.createElement('div');
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--glass-bg);
            backdrop-filter: var(--glass-blur);
            color: var(--gensyn-text-primary);
            padding: var(--space-12) var(--space-16);
            border-radius: 8px;
            border: 1px solid var(--glass-border);
            box-shadow: var(--shadow-lg);
            z-index: 10000;
            transition: all 0.3s ease;
            transform: translateY(-10px);
            opacity: 0;
        `;
        toast.textContent = message;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.style.opacity = '1';
            toast.style.transform = 'translateY(0)';
        }, 50);
        
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, 2000);
    }
    
    setLoading(loading) {
        this.isLoading = loading;
        this.sendButton.disabled = loading;
        
        if (loading) {
            this.btnText.classList.add('hidden');
            this.btnLoading.classList.remove('hidden');
            this.sendButton.style.transform = '';
            this.sendButton.style.cursor = 'not-allowed';
        } else {
            this.btnText.classList.remove('hidden');
            this.btnLoading.classList.add('hidden');
            this.sendButton.style.cursor = 'pointer';
        }
    }
    
    scrollToBottom(smooth = true) {
        const scrollOptions = {
            top: this.messagesContainer.scrollHeight,
            behavior: smooth ? 'smooth' : 'instant'
        };
        
        this.messagesContainer.scrollTo(scrollOptions);
    }
    
    generateSophisticatedResponse(userText) {
        const lowerText = userText.toLowerCase();
        
        // Analyze conversation context for more intelligent responses
        const context = this.getConversationContext();
        
        // Primary topic detection with detailed responses
        if (lowerText.includes('what is gensyn') || lowerText.includes('about gensyn') || lowerText.includes('explain gensyn')) {
            return this.responses.general_intro + (context.hasDiscussedTechnical ? "" : "\n\nWould you like me to dive deeper into any specific aspect - perhaps our technical architecture, tokenomics, or how to get started as a compute provider?");
        }
        
        if (lowerText.includes('technical') || lowerText.includes('architecture') || lowerText.includes('how does it work') || lowerText.includes('implementation')) {
            context.hasDiscussedTechnical = true;
            return this.responses.technical_details + "\n\nThe beauty of our approach is that it maintains the performance characteristics of centralized training while providing the benefits of decentralization. Are there specific technical aspects you'd like me to elaborate on?"
        }
        
        if (lowerText.includes('blockchain') || lowerText.includes('protocol') || lowerText.includes('smart contract') || lowerText.includes('consensus')) {
            return this.responses.blockchain_integration + "\n\nThis blockchain-native approach to AI training is what sets Gensyn apart from traditional cloud computing providers. The transparency and verifiability are game-changing for the AI research community.";
        }
        
        if (lowerText.includes('decentraliz') || lowerText.includes('distributed') || lowerText.includes('why decentralized')) {
            return this.responses.decentralized_ai + "\n\nThe shift towards decentralized AI isn't just about technology—it's about creating a more equitable future where AI development isn't controlled by a handful of corporations. This democratization is essential for innovation and fairness.";
        }
        
        if (lowerText.includes('governance') || lowerText.includes('dao') || lowerText.includes('community') || lowerText.includes('voting')) {
            return this.responses.community_governance + "\n\nThis governance model ensures that Gensyn evolves according to the needs and values of its community rather than the interests of a centralized entity. It's democracy applied to AI infrastructure.";
        }
        
        if (lowerText.includes('marketplace') || lowerText.includes('compute market') || lowerText.includes('buying') || lowerText.includes('selling')) {
            return this.responses.compute_market + "\n\nThe marketplace creates a truly global compute economy where resources can be utilized efficiently regardless of geographic boundaries. It's like an 'Uber for AI compute' but with proper economic incentives and quality guarantees.";
        }
        
        // Follow-up and contextual responses
        if (lowerText.includes('reward') || lowerText.includes('earn') || lowerText.includes('incentive') || lowerText.includes('money')) {
            return "The reward system in Gensyn is designed to fairly compensate all participants based on their contributions. Compute providers earn tokens proportional to the computational work they perform, while also receiving bonuses for high reliability and performance.\n\nThe economic model creates sustainable incentives: providers are motivated to maintain high-quality hardware and reliable connections, while the competitive marketplace keeps prices fair for consumers. Token rewards are distributed automatically through smart contracts, ensuring transparent and timely payments.\n\nBeyond direct monetary rewards, participants also benefit from being part of advancing the field of AI and contributing to models that might become widely used.";
        }
        
        if (lowerText.includes('gpu') || lowerText.includes('hardware') || lowerText.includes('requirements') || lowerText.includes('setup')) {
            return "Getting started as a compute provider on Gensyn is designed to be accessible to a wide range of hardware configurations. While high-end GPUs like H100s or A100s are ideal for large training jobs, even consumer-grade GPUs can participate in certain tasks.\n\nThe protocol automatically matches your hardware capabilities with appropriate training tasks. Our software handles all the complex networking, synchronization, and verification automatically—you just need to run our client and specify your availability.\n\nWe support NVIDIA GPUs with CUDA compute capability 6.0+, and we're working on expanding support for AMD and other hardware. The client software handles driver management, memory optimization, and fault recovery to maximize your earning potential while protecting your hardware.";
        }
        
        if (lowerText.includes('model') || lowerText.includes('training') || lowerText.includes('ml') || lowerText.includes('ai model')) {
            return "Gensyn supports training a wide variety of model architectures, from transformer-based language models to computer vision networks, reinforcement learning agents, and specialized scientific computing models.\n\nOur protocol is architecture-agnostic, meaning researchers can train virtually any model that can be parallelized. We provide optimized implementations for popular frameworks like PyTorch and TensorFlow, with custom optimizations for distributed training scenarios.\n\nThe platform particularly excels at large-scale training that would be cost-prohibitive on traditional cloud platforms. We've successfully demonstrated training of billion-parameter models across hundreds of distributed GPUs with performance comparable to centralized alternatives.\n\nResearchers benefit from the cost savings, while also contributing to a more open and collaborative AI ecosystem.";
        }
        
        if (lowerText.includes('security') || lowerText.includes('trust') || lowerText.includes('verification') || lowerText.includes('safety')) {
            return "Security is paramount in Gensyn's design. We've implemented multiple layers of protection against various attack vectors common in distributed systems:\n\n**Verification Layer**: All computational work is cryptographically verified using our proof-of-learning mechanism. This prevents participants from submitting fake work or manipulating gradients.\n\n**Byzantine Fault Tolerance**: The protocol can handle up to 33% malicious participants while maintaining training integrity through redundant computation and statistical verification.\n\n**Economic Security**: The token-based incentive system makes attacks economically unfeasible—honest participation is always more profitable than malicious behavior.\n\n**Privacy Protection**: We support various privacy-preserving techniques including differential privacy, secure aggregation, and federated learning approaches.\n\nThe combination of cryptographic, economic, and algorithmic security measures creates a robust system that's actually more secure than many centralized alternatives.";
        }
        
        if (lowerText.includes('cost') || lowerText.includes('price') || lowerText.includes('expensive') || lowerText.includes('cheap')) {
            return "One of Gensyn's major value propositions is dramatically reducing the cost of AI training through competition and efficiency improvements:\n\n**Cost Reduction**: By creating a competitive marketplace, prices naturally settle at levels that reflect true marginal costs rather than monopolistic premiums. Early estimates suggest 60-80% cost reductions compared to major cloud providers.\n\n**Efficiency Gains**: Our protocol eliminates many inefficiencies in traditional cloud computing: no idle time charges, optimized resource allocation, and automatic scaling based on actual computational needs.\n\n**Transparent Pricing**: All pricing is handled through smart contracts with transparent market mechanisms. No hidden fees, complex pricing tiers, or vendor lock-in.\n\n**Democratic Access**: Lower costs mean smaller research teams, startups, and developing countries can access the computational resources needed for cutting-edge AI research.\n\nThis cost reduction doesn't come at the expense of quality—our verification systems ensure that cheaper compute maintains the same standards as premium alternatives.";
        }
        
        // Contextual greetings and responses
        if (lowerText.includes('hello') || lowerText.includes('hi') || lowerText.includes('hey')) {
            const greetings = [
                "Hello! I'm excited to discuss Gensyn's mission to democratize AI development. We're building something truly revolutionary—a decentralized network that makes advanced AI training accessible to everyone, not just tech giants.",
                "Hi there! Great to meet you. I'm here to help you understand how Gensyn is transforming AI development through decentralized compute networks. What aspect interests you most—the technical architecture, economic model, or perhaps how to get involved?",
                "Hey! Welcome to learning about Gensyn. We're creating the world's first decentralized machine learning compute protocol, and I'd love to share how we're making AI development more open, transparent, and accessible."
            ];
            return greetings[Math.floor(Math.random() * greetings.length)];
        }
        
        if (lowerText.includes('thank') || lowerText.includes('appreciate')) {
            return "You're very welcome! I'm passionate about sharing Gensyn's vision because I believe decentralized AI represents a fundamental shift toward a more equitable and innovative future. Feel free to ask about anything else—technical details, getting involved as a provider or consumer, or our roadmap for the future.";
        }
        
        // Advanced contextual responses based on conversation history
        if (context.hasDiscussedTechnical && (lowerText.includes('more') || lowerText.includes('detail') || lowerText.includes('deeper'))) {
            return "Let me dive deeper into some fascinating technical aspects:\n\n**Gradient Compression**: We use advanced compression algorithms to minimize bandwidth requirements during distributed training, achieving up to 10x reduction in communication overhead.\n\n**Fault Recovery**: Our checkpointing system can recover from node failures in under 30 seconds, automatically redistributing work to healthy nodes.\n\n**Load Balancing**: Machine learning algorithms dynamically optimize work distribution based on real-time performance metrics, hardware capabilities, and network conditions.\n\n**Quality Assurance**: We implement statistical tests to detect and isolate underperforming or malicious nodes, maintaining training quality even in adversarial conditions.\n\nThese innovations make distributed training on Gensyn not just cheaper, but often faster and more reliable than centralized alternatives.";
        }
        
        // Default sophisticated responses
        const defaultResponses = [
            "That's an interesting question about Gensyn. Our decentralized approach to AI training represents a paradigm shift from the current centralized model. By distributing computational work across a global network of participants, we're not just reducing costs—we're democratizing access to the tools needed for cutting-edge AI research. The implications go far beyond just technical improvements; we're creating a more equitable future for AI development.",
            "Great question! Gensyn's protocol addresses several critical challenges in today's AI landscape. The concentration of computational resources in the hands of a few large companies has created barriers to innovation and limited who can participate in AI development. Our blockchain-based coordination mechanism ensures that computational work is verifiable and fairly compensated, creating a trustless environment for collaborative AI training.\n\nThis represents a fundamental shift from the current paradigm where AI development is dominated by tech giants with massive data centers.",
            "I appreciate your curiosity about Gensyn! What makes our approach unique is the combination of cryptographic verification, economic incentives, and modular architecture. This allows us to maintain the performance characteristics of centralized training while providing the benefits of decentralization: lower costs, increased accessibility, and democratic governance of AI development.\n\nWe're not just building technology—we're creating a movement toward truly democratic AI development."
        ];
        
        return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
    }
    
    getConversationContext() {
        // Simple context tracking based on conversation history
        const context = {
            hasDiscussedTechnical: false,
            hasDiscussedEconomics: false,
            messageCount: this.conversationHistory.length
        };
        
        const allText = this.conversationHistory.map(msg => msg.text.toLowerCase()).join(' ');
        
        if (allText.includes('technical') || allText.includes('architecture') || allText.includes('protocol')) {
            context.hasDiscussedTechnical = true;
        }
        
        if (allText.includes('token') || allText.includes('reward') || allText.includes('cost') || allText.includes('economic')) {
            context.hasDiscussedEconomics = true;
        }
        
        return context;
    }
    
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Initialize the chat when the page loads
let gensynChat;

// Add error handling for the entire app
window.addEventListener('error', (e) => {
    console.error('🚨 Global error:', e.error);
    console.log('💡 Tip: Check if all CSS and JS files loaded correctly');
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('🚨 Unhandled promise rejection:', e.reason);
});

document.addEventListener('DOMContentLoaded', () => {
    console.log('📄 DOM Content Loaded - Starting Gensyn AI ChatBot');
    
    try {
        // Ensure basic styles are applied
        document.body.style.backgroundColor = '#1a1a1a';
        document.body.style.color = '#ffffff';
        document.body.style.margin = '0';
        document.body.style.padding = '0';
        document.body.style.fontFamily = 'Inter, -apple-system, BlinkMacSystemFont, Arial, sans-serif';
        
        gensynChat = new GensynChat();
        
        // Add some loading delay for better UX
        document.body.classList.add('loaded');
        
        // Initialize enhanced features
        initializeEnhancedFeatures();
        
        console.log('🎉 Gensyn AI ChatBot fully loaded!');
    } catch (error) {
        console.error('💥 Failed to initialize Gensyn AI ChatBot:', error);
        // Show error message to user
        const errorDiv = document.createElement('div');
        errorDiv.style.cssText = `
            position: fixed;
            top: 20px;
            left: 20px;
            right: 20px;
            background: #dc2626;
            color: white;
            padding: 16px;
            border-radius: 8px;
            z-index: 10000;
            font-family: Arial, sans-serif;
        `;
        errorDiv.textContent = 'Error loading Gensyn AI ChatBot. Please refresh the page.';
        document.body.appendChild(errorDiv);
    }
});

// Fallback initialization if DOMContentLoaded doesn't fire
setTimeout(() => {
    if (!gensynChat) {
        console.warn('⚠️ DOMContentLoaded may have failed, trying fallback initialization');
        try {
            gensynChat = new GensynChat();
            console.log('✅ Fallback initialization successful');
        } catch (error) {
            console.error('❌ Fallback initialization failed:', error);
        }
    }
}, 2000);

function initializeEnhancedFeatures() {
    // Add smooth page transitions
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    });
    
    // Observe elements for scroll animations
    document.querySelectorAll('.chat-card, .info-card').forEach(el => {
        observer.observe(el);
    });
    
    // Add performance monitoring
    if ('performance' in window) {
        window.addEventListener('load', () => {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log(`⚡ Gensyn AI loaded in ${Math.round(perfData.loadEventEnd - perfData.fetchStart)}ms`);
        });
    }
    
    // Add service worker for offline support (future feature)
    if ('serviceWorker' in navigator) {
        // navigator.serviceWorker.register('/sw.js').catch(() => {});
    }
}
const DEFAULT_CATEGORIES = [
            "Desenvolvimento Web", "Desenvolvimento Mobile", "Design Gráfico", "UI/UX Design",
            "Marketing Digital", "Redação e Copywriting", "Tradução", "Edição de Vídeo",
            "Fotografia", "Administração", "Suporte Técnico", "Dados e Inteligência Artificial",
            "Redes e Infraestrutura", "Consultoria", "Finanças", "Outros"
        ];

        const SEED_USERS = [
            {
                id: "usr_client_1",
                name: "Ana Costa",
                email: "ana.costa@empresa.com",
                role: "client",
                active: true,
                avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
            },
            {
                id: "usr_client_2",
                name: "Marcos Silva",
                email: "marcos@techlabs.com",
                role: "client",
                active: true,
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
            },
            {
                id: "usr_freela_1",
                name: "Carlos Dev",
                email: "carlos@dev.io",
                role: "freelancer",
                active: true,
                area: "Desenvolvimento Web",
                hourlyRate: 120,
                skills: ["React", "Node.js", "Tailwind", "TypeScript", "REST API"],
                bio: "Desenvolvedor Full Stack com mais de 6 anos de experiência em projetos web escaláveis e modernos.",
                experience: "Sênior",
                avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
                rating: 4.9
            },
            {
                id: "usr_freela_2",
                name: "Julia Designer",
                email: "julia@uxdesign.com",
                role: "freelancer",
                active: true,
                area: "UI/UX Design",
                hourlyRate: 95,
                skills: ["Figma", "UI/UX", "Prototipagem", "Design Systems", "Mobile"],
                bio: "Especialista em criar interfaces intuitivas, elegantes e focadas na melhor experiência do usuário.",
                experience: "Pleno",
                avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150",
                rating: 5.0
            },
            {
                id: "usr_freela_3",
                name: "Roberto Copywriter",
                email: "roberto@copy.com",
                role: "freelancer",
                active: true,
                area: "Redação e Copywriting",
                hourlyRate: 80,
                skills: ["SEO", "Copywriting", "Artigos", "E-books", "E-mail Marketing"],
                bio: "Redator publicitário focado em conversão e engajamento de marcas digitais.",
                experience: "Pleno",
                avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
                rating: 4.8
            },
            {
                id: "usr_admin_1",
                name: "Admin Master",
                email: "admin@freelahub.com",
                role: "admin",
                active: true,
                sector: "Tecnologia & Infraestrutura",
                permissions: "Acesso Total",
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150"
            }
        ];

        const SEED_PROJECTS = [
            {
                id: "proj_1",
                title: "Desenvolvimento de E-commerce em React e Node.js",
                clientId: "usr_client_1",
                category: "Desenvolvimento Web",
                subcategory: "E-commerce",
                budget: 4500,
                deadline: 30,
                skills: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
                description: "Preciso de um e-commerce completo para loja de vestuário com painel administrativo, integração com gateway de pagamento (Stripe) e cálculo de frete.",
                status: "Recebendo propostas",
                createdAt: "2026-03-01",
                hiredFreelancerId: null
            },
            {
                id: "proj_2",
                title: "Redesign de Aplicativo Financeiro iOS/Android",
                clientId: "usr_client_2",
                category: "UI/UX Design",
                subcategory: "Mobile App",
                budget: 2800,
                deadline: 15,
                skills: ["Figma", "UI/UX", "Prototipagem Mobile"],
                description: "Reformulação da interface do nosso aplicativo de gestão de finanças pessoais, focando em simplicidade e usabilidade para o público jovem.",
                status: "Em andamento",
                createdAt: "2026-02-25",
                hiredFreelancerId: "usr_freela_2"
            },
            {
                id: "proj_3",
                title: "Criação de Artigos SEO para Blog de Tecnologia",
                clientId: "usr_client_1",
                category: "Redação e Copywriting",
                subcategory: "Artigos",
                budget: 1200,
                deadline: 10,
                skills: ["SEO", "Redação", "Tecnologia"],
                description: "Elaboração de 10 artigos otimizados para mecanismos de busca sobre inteligência artificial e computação em nuvem.",
                status: "Concluído",
                createdAt: "2026-02-10",
                hiredFreelancerId: "usr_freela_3"
            }
        ];

        const SEED_PROPOSALS = [
            {
                id: "prop_1",
                projectId: "proj_1",
                freelancerId: "usr_freela_1",
                amount: 4200,
                days: 25,
                message: "Olá Ana! Tenho ampla experiência na construção de e-commerces em React. Posso entregar com código limpo, testes unitários e design fluido.",
                createdAt: "2026-03-02",
                status: "Enviada"
            },
            {
                id: "prop_2",
                projectId: "proj_2",
                freelancerId: "usr_freela_2",
                amount: 2800,
                days: 15,
                message: "Adorei a proposta! Trabalho com design de apps no Figma diariamente e apresento protótipos navegáveis em pouco tempo.",
                createdAt: "2026-02-26",
                status: "Aceita"
            }
        ];

        const SEED_MESSAGES = [
            {
                id: "msg_1",
                projectId: "proj_2",
                senderId: "usr_client_2",
                receiverId: "usr_freela_2",
                text: "Olá Julia! Proposta aceita. Quando podemos começar o alinhamento inicial?",
                timestamp: "2026-02-26 14:30",
                read: true
            },
            {
                id: "msg_2",
                projectId: "proj_2",
                senderId: "usr_freela_2",
                receiverId: "usr_client_2",
                text: "Ótimo Marcos! Já montei o board inicial no Figma. Enviarei o link para primeira análise até amanhã.",
                timestamp: "2026-02-26 14:42",
                read: true
            }
        ];

        const SEED_REVIEWS = [
            {
                id: "rev_1",
                projectId: "proj_3",
                authorId: "usr_client_1",
                targetUserId: "usr_freela_3",
                stars: 5,
                comment: "Excelente trabalho! Textos muito bem escritos e entregues antes do prazo final.",
                createdAt: "2026-02-20"
            }
        ];

        const SEED_LOGS = [
            {
                id: "log_1",
                adminName: "Admin Master",
                action: "Aprovação e verificação do usuário Carlos Dev",
                timestamp: "2026-03-01 10:15"
            }
        ];

        class FreelaHubApp {
            constructor() {
                this.initStorage();
                this.currentUser = this.loadCurrentUser();
                this.currentView = 'home';
                this.activeChatUserId = null;
                this.activeChatProjectId = null;
            }

            initStorage() {
                if (!localStorage.getItem('fh_users')) {
                    localStorage.setItem('fh_users', JSON.stringify(SEED_USERS));
                }
                if (!localStorage.getItem('fh_projects')) {
                    localStorage.setItem('fh_projects', JSON.stringify(SEED_PROJECTS));
                }
                if (!localStorage.getItem('fh_proposals')) {
                    localStorage.setItem('fh_proposals', JSON.stringify(SEED_PROPOSALS));
                }
                if (!localStorage.getItem('fh_messages')) {
                    localStorage.setItem('fh_messages', JSON.stringify(SEED_MESSAGES));
                }
                if (!localStorage.getItem('fh_reviews')) {
                    localStorage.setItem('fh_reviews', JSON.stringify(SEED_REVIEWS));
                }
                if (!localStorage.getItem('fh_categories')) {
                    localStorage.setItem('fh_categories', JSON.stringify(DEFAULT_CATEGORIES));
                }
                if (!localStorage.getItem('fh_logs')) {
                    localStorage.setItem('fh_logs', JSON.stringify(SEED_LOGS));
                }
            }

            // Getters
            get users() { return JSON.parse(localStorage.getItem('fh_users')) || []; }
            get projects() { return JSON.parse(localStorage.getItem('fh_projects')) || []; }
            get proposals() { return JSON.parse(localStorage.getItem('fh_proposals')) || []; }
            get messages() { return JSON.parse(localStorage.getItem('fh_messages')) || []; }
            get reviews() { return JSON.parse(localStorage.getItem('fh_reviews')) || []; }
            get categories() { return JSON.parse(localStorage.getItem('fh_categories')) || []; }
            get logs() { return JSON.parse(localStorage.getItem('fh_logs')) || []; }

            // Setters
            setUsers(data) { localStorage.setItem('fh_users', JSON.stringify(data)); }
            setProjects(data) { localStorage.setItem('fh_projects', JSON.stringify(data)); }
            setProposals(data) { localStorage.setItem('fh_proposals', JSON.stringify(data)); }
            setMessages(data) { localStorage.setItem('fh_messages', JSON.stringify(data)); }
            setReviews(data) { localStorage.setItem('fh_reviews', JSON.stringify(data)); }
            setCategories(data) { localStorage.setItem('fh_categories', JSON.stringify(data)); }
            addLog(action) {
                const logs = this.logs;
                const newLog = {
                    id: 'log_' + Date.now(),
                    adminName: this.currentUser?.name || 'Administrador',
                    action: action,
                    timestamp: new Date().toLocaleString('pt-BR')
                };
                logs.unshift(newLog);
                localStorage.setItem('fh_logs', JSON.stringify(logs));
            }

            loadCurrentUser() {
                const savedId = localStorage.getItem('fh_current_user_id');
                const users = this.users;
                if (savedId) {
                    const u = users.find(x => x.id === savedId);
                    if (u) return u;
                }
                // Default fallback to client
                return users[0];
            }

            setCurrentUser(user) {
                this.currentUser = user;
                localStorage.setItem('fh_current_user_id', user.id);
                this.renderNav();
                this.refreshCurrentView();
            }

            demoSwitch(role) {
                const users = this.users;
                let target = null;
                if (role === 'client') target = users.find(u => u.role === 'client');
                if (role === 'freelancer') target = users.find(u => u.role === 'freelancer');
                if (role === 'admin') target = users.find(u => u.role === 'admin');

                if (target) {
                    this.setCurrentUser(target);
                    this.showToast(`Perfil alterado para ${target.name} (${target.role})`, 'info');
                    document.getElementById('quick-switch-menu').classList.add('hidden');
                }
            }

            toggleQuickSwitchMenu() {
                document.getElementById('quick-switch-menu').classList.toggle('hidden');
            }

            toggleMobileMenu() {
                document.getElementById('mobile-menu').classList.toggle('hidden');
            }

            navigateTo(viewName) {
                this.currentView = viewName;
                document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden'));

                const targetView = document.getElementById(`view-${viewName}`);
                if (targetView) targetView.classList.remove('hidden');

                this.renderNav();
                this.refreshCurrentView();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }

            refreshCurrentView() {
                if (this.currentView === 'home') this.renderHome();
                if (this.currentView === 'projects') this.renderProjectsFeed();
                if (this.currentView === 'freelancers') this.renderFreelancersFeed();
                if (this.currentView === 'client-dashboard') this.renderClientDashboard();
                if (this.currentView === 'freelancer-dashboard') this.renderFreelancerDashboard();
                if (this.currentView === 'messages') this.renderMessages();
                if (this.currentView === 'admin') this.renderAdminDashboard();
            }

            renderNav() {
                const navLinks = document.getElementById('desktop-nav-links');
                const authContainer = document.getElementById('auth-header-container');
                const mobileMenu = document.getElementById('mobile-menu');
                const roleBadge = document.getElementById('current-role-badge');

                const u = this.currentUser;
                roleBadge.textContent = u ? `${u.name.split(' ')[0]} (${u.role})` : 'Entrar';

                // Desktop Links
                let linksHtml = `
                    <button onclick="app.navigateTo('home')" class="px-3 py-2 text-xs font-semibold ${this.currentView === 'home' ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'} transition">Início</button>
                    <button onclick="app.navigateTo('projects')" class="px-3 py-2 text-xs font-semibold ${this.currentView === 'projects' ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'} transition">Projetos</button>
                    <button onclick="app.navigateTo('freelancers')" class="px-3 py-2 text-xs font-semibold ${this.currentView === 'freelancers' ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'} transition">Freelancers</button>
                `;

                if (u.role === 'client') {
                    linksHtml += `<button onclick="app.navigateTo('client-dashboard')" class="px-3 py-2 text-xs font-semibold ${this.currentView === 'client-dashboard' ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'} transition">Meu Painel</button>`;
                } else if (u.role === 'freelancer') {
                    linksHtml += `<button onclick="app.navigateTo('freelancer-dashboard')" class="px-3 py-2 text-xs font-semibold ${this.currentView === 'freelancer-dashboard' ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'} transition">Minhas Propostas</button>`;
                } else if (u.role === 'admin') {
                    linksHtml += `<button onclick="app.navigateTo('admin')" class="px-3 py-2 text-xs font-bold ${this.currentView === 'admin' ? 'text-purple-600' : 'text-purple-700 hover:text-purple-900'} transition"><i class="fa-solid fa-shield-halved mr-1"></i> Área Adm</button>`;
                }

                linksHtml += `<button onclick="app.navigateTo('messages')" class="px-3 py-2 text-xs font-semibold ${this.currentView === 'messages' ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'} transition relative">
                    Mensagens
                    ${this.getUnreadCount() > 0 ? `<span class="ml-1 px-1.5 py-0.2 bg-red-500 text-white text-[9px] font-bold rounded-full">${this.getUnreadCount()}</span>` : ''}
                </button>`;

                navLinks.innerHTML = linksHtml;
                mobileMenu.innerHTML = linksHtml;

                // Auth Right Controls
                authContainer.innerHTML = `
                    <div class="flex items-center gap-3">
                        <img src="${u.avatar || 'https://placehold.co/100'}" class="w-8 h-8 rounded-full border border-slate-200 object-cover" alt="Perfil">
                        <div class="hidden sm:block text-left">
                            <span class="block text-xs font-bold text-slate-800 leading-tight">${u.name}</span>
                            <span class="block text-[10px] text-slate-400 capitalize">${u.role}</span>
                        </div>
                        <button onclick="app.openModal('modal-login')" title="Trocar conta/Login" class="p-2 text-slate-400 hover:text-slate-600 text-xs"><i class="fa-solid fa-right-to-bracket"></i></button>
                    </div>
                `;
            }

            getUnreadCount() {
                if (!this.currentUser) return 0;
                return this.messages.filter(m => m.receiverId === this.currentUser.id && !m.read).length;
            }

            renderHome() {
                const projects = this.projects;
                const users = this.users;
                const proposals = this.proposals;

                document.getElementById('stat-total-projects').textContent = projects.length;
                document.getElementById('stat-active-freelancers').textContent = users.filter(u => u.role === 'freelancer' && u.active).length;
                document.getElementById('stat-total-proposals').textContent = proposals.length;
                document.getElementById('stat-completed-projects').textContent = projects.filter(p => p.status === 'Concluído').length;

                // Categories Grid
                const catContainer = document.getElementById('home-categories-grid');
                catContainer.innerHTML = this.categories.map(cat => `
                    <div onclick="app.filterCategoryRedirect('${cat}')" class="p-3 bg-white hover:bg-blue-50/50 border border-slate-100 hover:border-blue-200 rounded-2xl cursor-pointer text-center transition group shadow-sm">
                        <div class="w-8 h-8 mx-auto rounded-xl bg-blue-100 text-blue-600 group-hover:scale-110 transition flex items-center justify-center text-xs mb-2">
                            <i class="fa-solid fa-folder"></i>
                        </div>
                        <span class="text-[11px] font-semibold text-slate-700 block line-clamp-1">${cat}</span>
                    </div>
                `).join('');

                // Recent Projects
                const recentContainer = document.getElementById('home-recent-projects');
                const recent = projects.slice(-3).reverse();
                recentContainer.innerHTML = recent.map(p => this.createProjectCardHtml(p)).join('');
            }

            filterCategoryRedirect(cat) {
                this.navigateTo('projects');
                const sel = document.getElementById('filter-project-category');
                if (sel) {
                    sel.value = cat;
                    this.filterProjects();
                }
            }

            renderProjectsFeed() {
                this.populateCategorySelects();
                this.filterProjects();
            }

            populateCategorySelects() {
                const cats = this.categories;
                const projectCatSelect = document.getElementById('filter-project-category');
                const pubCatSelect = document.getElementById('pub-category');
                const freelaAreaSelect = document.getElementById('filter-freelancer-area');
                const editProfArea = document.getElementById('edit-prof-area');

                const optionsHtml = `<option value="">Todas as Categorias</option>` + cats.map(c => `<option value="${c}">${c}</option>`).join('');

                if (projectCatSelect) projectCatSelect.innerHTML = optionsHtml;
                if (freelaAreaSelect) freelaAreaSelect.innerHTML = `<option value="">Todas as Áreas</option>` + cats.map(c => `<option value="${c}">${c}</option>`).join('');
                if (pubCatSelect) pubCatSelect.innerHTML = cats.map(c => `<option value="${c}">${c}</option>`).join('');
                if (editProfArea) editProfArea.innerHTML = cats.map(c => `<option value="${c}">${c}</option>`).join('');
            }

            filterProjects() {
                const search = document.getElementById('filter-project-search')?.value.toLowerCase() || '';
                const category = document.getElementById('filter-project-category')?.value || '';
                const budgetRange = document.getElementById('filter-project-budget')?.value || '';
                const status = document.getElementById('filter-project-status')?.value || '';

                let filtered = this.projects;

                if (search) {
                    filtered = filtered.filter(p => p.title.toLowerCase().includes(search) || p.description.toLowerCase().includes(search));
                }
                if (category) {
                    filtered = filtered.filter(p => p.category === category);
                }
                if (status) {
                    filtered = filtered.filter(p => p.status === status);
                }
                if (budgetRange) {
                    if (budgetRange === '0-1000') filtered = filtered.filter(p => p.budget <= 1000);
                    if (budgetRange === '1000-3000') filtered = filtered.filter(p => p.budget > 1000 && p.budget <= 3000);
                    if (budgetRange === '3000-5000') filtered = filtered.filter(p => p.budget > 3000 && p.budget <= 5000);
                    if (budgetRange === '5000+') filtered = filtered.filter(p => p.budget > 5000);
                }

                const grid = document.getElementById('projects-grid');
                if (filtered.length === 0) {
                    grid.innerHTML = `<div class="col-span-full py-12 text-center text-slate-400 text-xs">Nenhum projeto encontrado com os filtros aplicados.</div>`;
                } else {
                    grid.innerHTML = filtered.map(p => this.createProjectCardHtml(p)).join('');
                }
            }

            createProjectCardHtml(p) {
                const client = this.users.find(u => u.id === p.clientId) || { name: 'Contratante' };
                const propCount = this.proposals.filter(pr => pr.projectId === p.id).length;

                const statusColors = {
                    'Publicado': 'bg-blue-100 text-blue-700',
                    'Recebendo propostas': 'bg-emerald-100 text-emerald-700',
                    'Em negociação': 'bg-amber-100 text-amber-700',
                    'Em andamento': 'bg-purple-100 text-purple-700',
                    'Concluído': 'bg-slate-100 text-slate-700',
                    'Cancelado': 'bg-red-100 text-red-700'
                };

                return `
                    <div class="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition flex flex-col justify-between">
                        <div>
                            <div class="flex items-center justify-between gap-2 mb-3">
                                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase ${statusColors[p.status] || 'bg-slate-100 text-slate-700'}">${p.status}</span>
                                <span class="text-[11px] text-slate-400 font-medium"><i class="fa-regular fa-clock mr-1"></i> ${p.deadline} dias</span>
                            </div>
                            <h3 class="font-bold text-slate-900 text-sm mb-2 hover:text-blue-600 cursor-pointer" onclick="app.openProjectDetailsModal('${p.id}')">${p.title}</h3>
                            <p class="text-xs text-slate-500 line-clamp-2 mb-4 leading-relaxed">${p.description}</p>

                            <div class="flex flex-wrap gap-1 mb-4">
                                ${(p.skills || []).slice(0, 3).map(s => `<span class="px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md text-[10px]">${s}</span>`).join('')}
                            </div>
                        </div>

                        <div class="pt-3 border-t border-slate-100 flex items-center justify-between">
                            <div>
                                <span class="text-[10px] text-slate-400 block font-medium">Orçamento</span>
                                <span class="font-bold text-slate-900 text-sm">R$ ${p.budget.toLocaleString('pt-BR')}</span>
                            </div>
                            <button onclick="app.openProjectDetailsModal('${p.id}')" class="px-3 py-1.5 bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-600 font-semibold text-xs rounded-xl transition">
                                Ver Detalhes (${propCount})
                            </button>
                        </div>
                    </div>
                `;
            }

            renderFreelancersFeed() {
                this.filterFreelancers();
            }

            filterFreelancers() {
                const search = document.getElementById('filter-freelancer-search')?.value.toLowerCase() || '';
                const area = document.getElementById('filter-freelancer-area')?.value || '';
                const minRating = parseFloat(document.getElementById('filter-freelancer-rating')?.value || '0');
                const exp = document.getElementById('filter-freelancer-exp')?.value || '';

                let freelas = this.users.filter(u => u.role === 'freelancer' && u.active);

                if (search) {
                    freelas = freelas.filter(f => f.name.toLowerCase().includes(search) || (f.skills || []).some(s => s.toLowerCase().includes(search)));
                }
                if (area) {
                    freelas = freelas.filter(f => f.area === area);
                }
                if (minRating > 0) {
                    freelas = freelas.filter(f => (f.rating || 5.0) >= minRating);
                }
                if (exp) {
                    freelas = freelas.filter(f => f.experience === exp);
                }

                const grid = document.getElementById('freelancers-grid');
                if (freelas.length === 0) {
                    grid.innerHTML = `<div class="col-span-full py-12 text-center text-slate-400 text-xs">Nenhum freelancer encontrado com os critérios aplicados.</div>`;
                } else {
                    grid.innerHTML = freelas.map(f => this.createFreelancerCardHtml(f)).join('');
                }
            }

            createFreelancerCardHtml(f) {
                return `
                    <div class="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition flex flex-col justify-between">
                        <div>
                            <div class="flex items-center gap-3 mb-4">
                                <img src="${f.avatar || 'https://placehold.co/100'}" class="w-12 h-12 rounded-2xl object-cover border border-slate-200" alt="${f.name}">
                                <div>
                                    <h3 class="font-bold text-slate-900 text-sm">${f.name}</h3>
                                    <span class="text-xs text-blue-600 font-medium block">${f.area || 'Freelancer'}</span>
                                    <span class="text-[10px] text-slate-400">${f.experience || 'Pleno'}</span>
                                </div>
                            </div>
                            <p class="text-xs text-slate-500 line-clamp-3 leading-relaxed mb-4">${f.bio || 'Sem descrição cadastrada.'}</p>
                            <div class="flex flex-wrap gap-1 mb-4">
                                ${(f.skills || []).map(s => `<span class="px-2 py-0.5 bg-blue-50 text-blue-700 rounded-md text-[10px] font-medium">${s}</span>`).join('')}
                            </div>
                        </div>

                        <div class="pt-3 border-t border-slate-100 flex items-center justify-between">
                            <div class="flex items-center gap-1 text-amber-500 text-xs font-bold">
                                <i class="fa-solid fa-star"></i>
                                <span>${f.rating || '5.0'}</span>
                                <span class="text-slate-400 font-normal">(${f.hourlyRate ? 'R$' + f.hourlyRate + '/h' : 'Sob consulta'})</span>
                            </div>
                            <button onclick="app.startChatWith('${f.id}')" class="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-xl shadow transition">
                                <i class="fa-regular fa-comment mr-1"></i> Mensagem
                            </button>
                        </div>
                    </div>
                `;
            }

            renderClientDashboard() {
                const client = this.currentUser;
                document.getElementById('client-dashboard-name').textContent = `Olá, ${client.name}`;

                const myProjects = this.projects.filter(p => p.clientId === client.id);
                const activeCount = myProjects.filter(p => p.status === 'Em andamento').length;
                const completedCount = myProjects.filter(p => p.status === 'Concluído').length;

                const myProjIds = myProjects.map(p => p.id);
                const proposalsCount = this.proposals.filter(pr => myProjIds.includes(pr.projectId) && pr.status === 'Enviada').length;

                document.getElementById('client-stat-active').textContent = activeCount;
                document.getElementById('client-stat-proposals').textContent = proposalsCount;
                document.getElementById('client-stat-completed').textContent = completedCount;

                const tbody = document.getElementById('client-projects-tbody');
                if (myProjects.length === 0) {
                    tbody.innerHTML = `<tr><td colspan="6" class="p-6 text-center text-slate-400">Você ainda não publicou nenhum projeto.</td></tr>`;
                    return;
                }

                tbody.innerHTML = myProjects.map(p => {
                    const props = this.proposals.filter(pr => pr.projectId === p.id);
                    return `
                        <tr class="hover:bg-slate-50/80 transition">
                            <td class="p-4 font-semibold text-slate-800">${p.title}</td>
                            <td class="p-4 text-slate-600">${p.category}</td>
                            <td class="p-4 font-bold text-slate-800">R$ ${p.budget.toLocaleString('pt-BR')}</td>
                            <td class="p-4"><span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-700">${p.status}</span></td>
                            <td class="p-4"><span class="font-bold text-slate-800">${props.length}</span> propostas</td>
                            <td class="p-4 text-right space-x-1">
                                <button onclick="app.openProposalsModal('${p.id}')" class="px-2.5 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-[11px] font-medium shadow">
                                    Ver Propostas
                                </button>
                                ${p.status === 'Em andamento' ? `
                                    <button onclick="app.markProjectCompleted('${p.id}')" class="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-[11px] font-medium shadow">
                                        Concluir
                                    </button>
                                ` : ''}
                            </td>
                        </tr>
                    `;
                }).join('');
            }

            renderFreelancerDashboard() {
                const freela = this.currentUser;
                document.getElementById('freelancer-dash-name').textContent = freela.name;
                document.getElementById('freelancer-dash-title').textContent = freela.area || 'Freelancer';
                document.getElementById('freelancer-dash-avatar').src = freela.avatar || 'https://placehold.co/150';

                const myProposals = this.proposals.filter(pr => pr.freelancerId === freela.id);
                const activeProjects = this.projects.filter(p => p.hiredFreelancerId === freela.id && p.status === 'Em andamento');
                const completedProjects = this.projects.filter(p => p.hiredFreelancerId === freela.id && p.status === 'Concluído');
                const myReviews = this.reviews.filter(r => r.targetUserId === freela.id);

                document.getElementById('freelancer-stat-proposals').textContent = myProposals.length;
                document.getElementById('freelancer-stat-active').textContent = activeProjects.length;
                document.getElementById('freelancer-stat-completed').textContent = completedProjects.length;
                document.getElementById('freelancer-stat-rating').textContent = freela.rating || '5.0';

                document.getElementById('freelancer-count-proposals').textContent = myProposals.length;
                document.getElementById('freelancer-count-active').textContent = activeProjects.length;
                document.getElementById('freelancer-count-reviews').textContent = myReviews.length;

                // Render Proposals tab
                const propContainer = document.getElementById('freelancer-proposals-list');
                if (myProposals.length === 0) {
                    propContainer.innerHTML = `<p class="text-xs text-slate-400 py-4 text-center">Você ainda não enviou propostas.</p>`;
                } else {
                    propContainer.innerHTML = myProposals.map(pr => {
                        const proj = this.projects.find(p => p.id === pr.projectId) || { title: 'Projeto Indisponível' };
                        return `
                            <div class="p-4 bg-slate-50 rounded-xl border border-slate-200/60 flex items-center justify-between">
                                <div>
                                    <h4 class="font-bold text-slate-800 text-xs">${proj.title}</h4>
                                    <p class="text-[11px] text-slate-500">Valor Proposto: R$ ${pr.amount} — Prazo: ${pr.days} dias</p>
                                </div>
                                <span class="px-2.5 py-1 rounded-full text-[10px] font-bold ${pr.status === 'Aceita' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-200 text-slate-700'}">${pr.status}</span>
                            </div>
                        `;
                    }).join('');
                }

                // Active Projects Tab
                const activeContainer = document.getElementById('freelancer-active-projects-list');
                if (activeProjects.length === 0) {
                    activeContainer.innerHTML = `<p class="text-xs text-slate-400 py-4 text-center">Nenhum projeto em andamento no momento.</p>`;
                } else {
                    activeContainer.innerHTML = activeProjects.map(p => `
                        <div class="p-4 bg-blue-50/50 rounded-xl border border-blue-100 flex items-center justify-between">
                            <div>
                                <h4 class="font-bold text-slate-800 text-xs">${p.title}</h4>
                                <p class="text-[11px] text-slate-500">Valor: R$ ${p.budget} — Prazo: ${p.deadline} dias</p>
                            </div>
                            <button onclick="app.startChatWith('${p.clientId}', '${p.id}')" class="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-xs font-semibold shadow">
                                <i class="fa-regular fa-comment mr-1"></i> Chat com Contratante
                            </button>
                        </div>
                    `).join('');
                }

                // Reviews Tab
                const reviewsContainer = document.getElementById('freelancer-reviews-list');
                if (myReviews.length === 0) {
                    reviewsContainer.innerHTML = `<p class="text-xs text-slate-400 py-4 text-center">Nenhuma avaliação recebida ainda.</p>`;
                } else {
                    reviewsContainer.innerHTML = myReviews.map(r => {
                        const author = this.users.find(u => u.id === r.authorId) || { name: 'Contratante' };
                        return `
                            <div class="p-4 bg-slate-50 rounded-xl border border-slate-200/60">
                                <div class="flex items-center justify-between mb-2">
                                    <span class="font-bold text-slate-800 text-xs">${author.name}</span>
                                    <div class="text-amber-400 text-xs"><i class="fa-solid fa-star"></i> ${r.stars}.0</div>
                                </div>
                                <p class="text-xs text-slate-600 italic">"${r.comment}"</p>
                                <span class="text-[10px] text-slate-400 block mt-2">${r.createdAt}</span>
                            </div>
                        `;
                    }).join('');
                }
            }

            switchFreelancerTab(tab) {
                ['proposals', 'active', 'reviews'].forEach(t => {
                    document.getElementById(`freelancer-tab-${t}`).classList.add('hidden');
                    const btn = document.getElementById(`tab-freelancer-${t}-btn`);
                    btn.classList.remove('border-b-2', 'border-blue-600', 'text-blue-600', 'font-bold');
                    btn.classList.add('text-slate-500', 'font-medium');
                });

                document.getElementById(`freelancer-tab-${tab}`).classList.remove('hidden');
                const activeBtn = document.getElementById(`tab-freelancer-${tab}-btn`);
                activeBtn.classList.add('border-b-2', 'border-blue-600', 'text-blue-600', 'font-bold');
            }

            renderMessages() {
                const u = this.currentUser;
                const msgs = this.messages;
                const conversationsList = document.getElementById('conversations-list');

                // Extract all contacts user talked to
                const contactIds = new Set();
                msgs.forEach(m => {
                    if (m.senderId === u.id) contactIds.add(m.receiverId);
                    if (m.receiverId === u.id) contactIds.add(m.senderId);
                });

                const contacts = Array.from(contactIds).map(id => this.users.find(usr => usr.id === id)).filter(Boolean);

                if (contacts.length === 0) {
                    conversationsList.innerHTML = `<div class="p-6 text-center text-xs text-slate-400">Nenhuma conversa iniciada.</div>`;
                    return;
                }

                conversationsList.innerHTML = contacts.map(c => {
                    const lastMsg = msgs.filter(m => (m.senderId === u.id && m.receiverId === c.id) || (m.senderId === c.id && m.receiverId === u.id)).pop();
                    const isSelected = this.activeChatUserId === c.id;

                    return `
                        <div onclick="app.selectConversation('${c.id}')" class="p-3 hover:bg-white cursor-pointer transition flex items-center gap-3 ${isSelected ? 'bg-white font-semibold border-l-4 border-blue-600' : ''}">
                            <img src="${c.avatar || 'https://placehold.co/100'}" class="w-9 h-9 rounded-full object-cover border border-slate-200" alt="${c.name}">
                            <div class="flex-grow overflow-hidden">
                                <div class="flex items-center justify-between">
                                    <h4 class="text-xs font-bold text-slate-800 truncate">${c.name}</h4>
                                    <span class="text-[9px] text-slate-400">${lastMsg ? lastMsg.timestamp.split(' ')[1] : ''}</span>
                                </div>
                                <p class="text-[11px] text-slate-500 truncate">${lastMsg ? lastMsg.text : 'Sem mensagens'}</p>
                            </div>
                        </div>
                    `;
                }).join('');

                if (this.activeChatUserId) {
                    this.renderChatThread();
                }
            }

            startChatWith(targetUserId, projectId = null) {
                this.activeChatUserId = targetUserId;
                this.activeChatProjectId = projectId;
                this.navigateTo('messages');
                this.renderMessages();
            }

            selectConversation(targetUserId) {
                this.activeChatUserId = targetUserId;
                this.renderMessages();
            }

            renderChatThread() {
                const u = this.currentUser;
                const target = this.users.find(usr => usr.id === this.activeChatUserId);
                if (!target) return;

                document.getElementById('chat-header-name').textContent = target.name;
                document.getElementById('chat-header-avatar').textContent = target.name.charAt(0);
                document.getElementById('chat-header-project').textContent = target.role === 'freelancer' ? `Freelancer (${target.area || ''})` : 'Contratante';

                document.getElementById('chat-input').disabled = false;
                document.getElementById('chat-send-btn').disabled = false;

                const thread = this.messages.filter(m =>
                    (m.senderId === u.id && m.receiverId === target.id) ||
                    (m.senderId === target.id && m.receiverId === u.id)
                );

                // Mark read
                let updated = false;
                const allMsgs = this.messages.map(m => {
                    if (m.receiverId === u.id && m.senderId === target.id && !m.read) {
                        m.read = true;
                        updated = true;
                    }
                    return m;
                });
                if (updated) this.setMessages(allMsgs);

                const box = document.getElementById('chat-messages-box');
                box.innerHTML = thread.map(m => {
                    const isMine = m.senderId === u.id;
                    return `
                        <div class="flex ${isMine ? 'justify-end' : 'justify-start'}">
                            <div class="max-w-xs sm:max-w-md p-3 rounded-2xl text-xs ${isMine ? 'bg-blue-600 text-white rounded-br-none' : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none shadow-sm'}">
                                <p class="leading-relaxed">${m.text}</p>
                                <span class="text-[9px] ${isMine ? 'text-blue-200' : 'text-slate-400'} block text-right mt-1">${m.timestamp}</span>
                            </div>
                        </div>
                    `;
                }).join('');

                box.scrollTop = box.scrollHeight;
            }

            sendMessage(e) {
                e.preventDefault();
                const input = document.getElementById('chat-input');
                const text = input.value.trim();
                if (!text || !this.activeChatUserId) return;

                const newMsg = {
                    id: 'msg_' + Date.now(),
                    projectId: this.activeChatProjectId || null,
                    senderId: this.currentUser.id,
                    receiverId: this.activeChatUserId,
                    text: text,
                    timestamp: new Date().toLocaleDateString('pt-BR') + ' ' + new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
                    read: false
                };

                const msgs = this.messages;
                msgs.push(newMsg);
                this.setMessages(msgs);

                input.value = '';
                this.renderMessages();
            }

            renderAdminDashboard() {
                const users = this.users;
                const projects = this.projects;
                const proposals = this.proposals;

                document.getElementById('admin-welcome-name').textContent = `Painel do Administrador (${this.currentUser.name})`;
                document.getElementById('admin-sector-badge').textContent = `Setor: ${this.currentUser.sector || 'TI & Suporte'}`;

                document.getElementById('kpi-users-total').textContent = users.length;
                document.getElementById('kpi-users-clients').textContent = users.filter(u => u.role === 'client').length;
                document.getElementById('kpi-users-freelas').textContent = users.filter(u => u.role === 'freelancer').length;
                document.getElementById('kpi-projects-total').textContent = projects.length;
                document.getElementById('kpi-projects-active').textContent = projects.filter(p => p.status === 'Em andamento').length;
                document.getElementById('kpi-projects-completed').textContent = projects.filter(p => p.status === 'Concluído').length;

                this.renderAdminUsers();
                this.renderAdminProjects();
                this.renderAdminCategories();
                this.renderAdminLogs();
                this.renderAdminTeam();
            }

            switchAdminTab(tab) {
                ['users', 'projects', 'categories', 'logs', 'admins'].forEach(t => {
                    document.getElementById(`admin-tab-${t}`).classList.add('hidden');
                    const btn = document.getElementById(`admin-tab-${t}-btn`);
                    btn.classList.remove('border-b-2', 'border-purple-600', 'text-purple-600', 'font-bold');
                    btn.classList.add('text-slate-500', 'font-semibold');
                });

                document.getElementById(`admin-tab-${tab}`).classList.remove('hidden');
                const activeBtn = document.getElementById(`admin-tab-${tab}-btn`);
                activeBtn.classList.add('border-b-2', 'border-purple-600', 'text-purple-600', 'font-bold');
            }

            renderAdminUsers() {
                const search = document.getElementById('admin-user-search')?.value.toLowerCase() || '';
                const roleFilter = document.getElementById('admin-user-role-filter')?.value || '';

                let filtered = this.users;
                if (search) filtered = filtered.filter(u => u.name.toLowerCase().includes(search) || u.email.toLowerCase().includes(search));
                if (roleFilter) filtered = filtered.filter(u => u.role === roleFilter);

                const tbody = document.getElementById('admin-users-tbody');
                tbody.innerHTML = filtered.map(u => `
                    <tr class="hover:bg-slate-50 transition">
                        <td class="p-3 font-semibold text-slate-800 flex items-center gap-2">
                            <img src="${u.avatar || 'https://placehold.co/100'}" class="w-6 h-6 rounded-full object-cover">
                            ${u.name}
                        </td>
                        <td class="p-3 text-slate-600">${u.email}</td>
                        <td class="p-3 uppercase font-bold text-[10px] ${u.role === 'client' ? 'text-blue-600' : u.role === 'freelancer' ? 'text-emerald-600' : 'text-purple-600'}">${u.role}</td>
                        <td class="p-3">
                            <span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${u.active ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}">
                                ${u.active ? 'Ativo' : 'Inativo'}
                            </span>
                        </td>
                        <td class="p-3 text-right">
                            <button onclick="app.toggleUserActive('${u.id}')" class="px-2 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded text-[10px] font-medium">
                                ${u.active ? 'Desativar' : 'Ativar'}
                            </button>
                        </td>
                    </tr>
                `).join('');
            }

            toggleUserActive(userId) {
                const users = this.users.map(u => {
                    if (u.id === userId) {
                        u.active = !u.active;
                        this.addLog(`Status do usuário ${u.name} alterado para ${u.active ? 'Ativo' : 'Inativo'}`);
                    }
                    return u;
                });
                this.setUsers(users);
                this.renderAdminUsers();
                this.showToast('Status do usuário atualizado', 'success');
            }

            renderAdminProjects() {
                const tbody = document.getElementById('admin-projects-tbody');
                tbody.innerHTML = this.projects.map(p => {
                    const client = this.users.find(u => u.id === p.clientId) || { name: 'Contratante' };
                    return `
                        <tr class="hover:bg-slate-50 transition">
                            <td class="p-3 font-semibold text-slate-800">${p.title}</td>
                            <td class="p-3 text-slate-600">${client.name}</td>
                            <td class="p-3 text-slate-600">${p.category}</td>
                            <td class="p-3 font-bold text-slate-800">R$ ${p.budget}</td>
                            <td class="p-3"><span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-700">${p.status}</span></td>
                            <td class="p-3 text-right">
                                <button onclick="app.deleteProjectAdmin('${p.id}')" class="px-2 py-1 bg-red-100 hover:bg-red-200 text-red-700 rounded text-[10px] font-medium">
                                    Remover
                                </button>
                            </td>
                        </tr>
                    `;
                }).join('');
            }

            deleteProjectAdmin(projId) {
                if (confirm("Tem certeza que deseja remover este projeto da plataforma?")) {
                    const projects = this.projects.filter(p => p.id !== projId);
                    this.setProjects(projects);
                    this.addLog(`Projeto ${projId} removido da plataforma pela moderação`);
                    this.renderAdminProjects();
                    this.showToast('Projeto removido com sucesso', 'success');
                }
            }

            renderAdminCategories() {
                const container = document.getElementById('admin-categories-tags');
                container.innerHTML = this.categories.map(c => `
                    <span class="px-3 py-1.5 bg-slate-100 border border-slate-200 rounded-xl text-xs text-slate-700 font-semibold flex items-center gap-2">
                        ${c}
                        <button onclick="app.removeCategory('${c}')" class="text-slate-400 hover:text-red-500 text-xs"><i class="fa-solid fa-xmark"></i></button>
                    </span>
                `).join('');
            }

            addNewCategory(e) {
                e.preventDefault();
                const input = document.getElementById('new-category-input');
                const cat = input.value.trim();
                if (!cat) return;

                const cats = this.categories;
                if (!cats.includes(cat)) {
                    cats.push(cat);
                    this.setCategories(cats);
                    this.addLog(`Nova categoria cadastrada: ${cat}`);
                    input.value = '';
                    this.renderAdminCategories();
                    this.showToast('Categoria adicionada!', 'success');
                }
            }

            removeCategory(cat) {
                const cats = this.categories.filter(c => c !== cat);
                this.setCategories(cats);
                this.addLog(`Categoria removida: ${cat}`);
                this.renderAdminCategories();
                this.showToast('Categoria removida!', 'info');
            }

            renderAdminLogs() {
                const container = document.getElementById('admin-logs-list');
                container.innerHTML = this.logs.map(l => `
                    <div class="p-3 bg-slate-50 border border-slate-200/60 rounded-xl text-xs flex items-center justify-between">
                        <div>
                            <span class="font-bold text-slate-800">${l.adminName}:</span>
                            <span class="text-slate-600">${l.action}</span>
                        </div>
                        <span class="text-[10px] text-slate-400 whitespace-nowrap ml-2">${l.timestamp}</span>
                    </div>
                `).join('');
            }

            renderAdminTeam() {
                const admins = this.users.filter(u => u.role === 'admin');
                const tbody = document.getElementById('admin-team-tbody');
                tbody.innerHTML = admins.map(a => `
                    <tr class="hover:bg-slate-50 transition">
                        <td class="p-3 font-semibold text-slate-800">${a.name}</td>
                        <td class="p-3 text-slate-600">${a.email}</td>
                        <td class="p-3 text-purple-600 font-medium">${a.sector || 'Geral'}</td>
                        <td class="p-3 text-slate-500">${a.permissions || 'Completa'}</td>
                    </tr>
                `).join('');
            }

            openModal(id) {
                document.getElementById(id)?.classList.remove('hidden');
            }

            closeModal(id) {
                document.getElementById(id)?.classList.add('hidden');
            }

            openPublishProjectModal() {
                if (this.currentUser.role !== 'client') {
                    this.showToast('Alterne para o perfil Contratante para publicar projetos.', 'error');
                    return;
                }
                this.populateCategorySelects();
                this.openModal('modal-publish-project');
            }

            handlePublishProject(e) {
                e.preventDefault();
                const title = document.getElementById('pub-title').value;
                const category = document.getElementById('pub-category').value;
                const subcategory = document.getElementById('pub-subcategory').value;
                const budget = parseFloat(document.getElementById('pub-budget').value);
                const deadline = parseInt(document.getElementById('pub-deadline').value);
                const skills = document.getElementById('pub-skills').value.split(',').map(s => s.trim()).filter(Boolean);
                const description = document.getElementById('pub-description').value;

                const newProj = {
                    id: 'proj_' + Date.now(),
                    title,
                    clientId: this.currentUser.id,
                    category,
                    subcategory,
                    budget,
                    deadline,
                    skills,
                    description,
                    status: 'Recebendo propostas',
                    createdAt: new Date().toISOString().split('T')[0],
                    hiredFreelancerId: null
                };

                const projects = this.projects;
                projects.push(newProj);
                this.setProjects(projects);

                this.closeModal('modal-publish-project');
                this.showToast('Projeto publicado com sucesso!', 'success');
                this.refreshCurrentView();
            }

            openProjectDetailsModal(projId) {
                const p = this.projects.find(x => x.id === projId);
                if (!p) return;

                const client = this.users.find(u => u.id === p.clientId) || { name: 'Contratante' };

                document.getElementById('detail-project-title').textContent = p.title;
                document.getElementById('detail-project-status').textContent = p.status;
                document.getElementById('detail-project-client').textContent = `Publicado por ${client.name}`;
                document.getElementById('detail-project-budget').textContent = `R$ ${p.budget.toLocaleString('pt-BR')}`;
                document.getElementById('detail-project-deadline').textContent = `${p.deadline} dias`;
                document.getElementById('detail-project-category').textContent = p.category;
                document.getElementById('detail-project-desc').textContent = p.description;

                const skillsContainer = document.getElementById('detail-project-skills');
                skillsContainer.innerHTML = (p.skills || []).map(s => `<span class="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-medium">${s}</span>`).join('');

                document.getElementById('prop-project-id').value = p.id;

                const propFormContainer = document.getElementById('detail-proposal-form-container');
                if (this.currentUser.role === 'freelancer' && p.status === 'Recebendo propostas') {
                    propFormContainer.classList.remove('hidden');
                } else {
                    propFormContainer.classList.add('hidden');
                }

                this.openModal('modal-project-details');
            }

            handleSubmitProposal(e) {
                e.preventDefault();
                const projId = document.getElementById('prop-project-id').value;
                const amount = parseFloat(document.getElementById('prop-amount').value);
                const days = parseInt(document.getElementById('prop-days').value);
                const message = document.getElementById('prop-message').value;

                const newProp = {
                    id: 'prop_' + Date.now(),
                    projectId: projId,
                    freelancerId: this.currentUser.id,
                    amount,
                    days,
                    message,
                    createdAt: new Date().toISOString().split('T')[0],
                    status: 'Enviada'
                };

                const props = this.proposals;
                props.push(newProp);
                this.setProposals(props);

                this.closeModal('modal-project-details');
                this.showToast('Proposta enviada com sucesso!', 'success');
                this.refreshCurrentView();
            }

            openProposalsModal(projId) {
                const proj = this.projects.find(p => p.id === projId);
                const props = this.proposals.filter(pr => pr.projectId === projId);
                const list = document.getElementById('proposals-modal-list');

                document.getElementById('proposals-modal-subtitle').textContent = `Projeto: ${proj?.title}`;

                if (props.length === 0) {
                    list.innerHTML = `<p class="text-xs text-slate-400 py-6 text-center">Nenhuma proposta recebida até o momento.</p>`;
                } else {
                    list.innerHTML = props.map(pr => {
                        const freela = this.users.find(u => u.id === pr.freelancerId) || { name: 'Freelancer' };
                        return `
                            <div class="p-5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center gap-3">
                                        <img src="${freela.avatar || 'https://placehold.co/100'}" class="w-10 h-10 rounded-full object-cover">
                                        <div>
                                            <h4 class="font-bold text-slate-800 text-xs">${freela.name}</h4>
                                            <span class="text-[11px] text-amber-500 font-bold"><i class="fa-solid fa-star"></i> ${freela.rating || '5.0'}</span>
                                        </div>
                                    </div>
                                    <div class="text-right">
                                        <span class="font-bold text-slate-900 text-sm block">R$ ${pr.amount}</span>
                                        <span class="text-[10px] text-slate-400">${pr.days} dias de entrega</span>
                                    </div>
                                </div>
                                <p class="text-xs text-slate-600 bg-white p-3 rounded-xl border border-slate-100">${pr.message}</p>
                                <div class="flex justify-end gap-2 pt-1">
                                    <button onclick="app.startChatWith('${freela.id}', '${projId}')" class="px-3 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-medium rounded-xl">
                                        Conversar
                                    </button>
                                    ${pr.status !== 'Aceita' && proj.status !== 'Em andamento' ? `
                                        <button onclick="app.acceptProposal('${pr.id}')" class="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow">
                                            Contratar Freelancer
                                        </button>
                                    ` : `<span class="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-xl">Contratado</span>`}
                                </div>
                            </div>
                        `;
                    }).join('');
                }

                this.openModal('modal-view-proposals');
            }

            acceptProposal(propId) {
                const props = this.proposals.map(pr => {
                    if (pr.id === propId) pr.status = 'Aceita';
                    return pr;
                });
                this.setProposals(props);

                const targetProp = this.proposals.find(pr => pr.id === propId);
                const projects = this.projects.map(p => {
                    if (p.id === targetProp.projectId) {
                        p.status = 'Em andamento';
                        p.hiredFreelancerId = targetProp.freelancerId;
                    }
                    return p;
                });
                this.setProjects(projects);

                this.closeModal('modal-view-proposals');
                this.showToast('Freelancer contratado e projeto iniciado!', 'success');
                this.refreshCurrentView();
            }

            markProjectCompleted(projId) {
                const projects = this.projects.map(p => {
                    if (p.id === projId) p.status = 'Concluído';
                    return p;
                });
                this.setProjects(projects);

                const targetProj = this.projects.find(p => p.id === projId);
                document.getElementById('review-project-id').value = projId;
                document.getElementById('review-target-user-id').value = targetProj.hiredFreelancerId;

                this.openModal('modal-rating');
                this.refreshCurrentView();
            }

            setRatingStars(count) {
                document.getElementById('review-stars-val').value = count;
                const stars = document.querySelectorAll('#star-rating-selector i');
                stars.forEach((s, idx) => {
                    if (idx < count) {
                        s.classList.remove('fa-regular');
                        s.classList.add('fa-solid');
                    } else {
                        s.classList.remove('fa-solid');
                        s.classList.add('fa-regular');
                    }
                });
            }

            handleSubmitReview(e) {
                e.preventDefault();
                const projId = document.getElementById('review-project-id').value;
                const targetUserId = document.getElementById('review-target-user-id').value;
                const stars = parseInt(document.getElementById('review-stars-val').value);
                const comment = document.getElementById('review-comment').value;

                const newRev = {
                    id: 'rev_' + Date.now(),
                    projectId: projId,
                    authorId: this.currentUser.id,
                    targetUserId,
                    stars,
                    comment,
                    createdAt: new Date().toISOString().split('T')[0]
                };

                const revs = this.reviews;
                revs.push(newRev);
                this.setReviews(revs);

                this.closeModal('modal-rating');
                this.showToast('Avaliação cadastrada com sucesso!', 'success');
                this.refreshCurrentView();
            }

            openEditProfileModal() {
                const u = this.currentUser;
                this.populateCategorySelects();

                document.getElementById('edit-prof-name').value = u.name || '';
                document.getElementById('edit-prof-area').value = u.area || '';
                document.getElementById('edit-prof-exp').value = u.experience || 'Pleno';
                document.getElementById('edit-prof-rate').value = u.hourlyRate || '';
                document.getElementById('edit-prof-skills').value = (u.skills || []).join(', ');
                document.getElementById('edit-prof-bio').value = u.bio || '';
                document.getElementById('edit-prof-avatar').value = u.avatar || '';

                this.openModal('modal-edit-profile');
            }

            handleSaveProfile(e) {
                e.preventDefault();
                const users = this.users.map(u => {
                    if (u.id === this.currentUser.id) {
                        u.name = document.getElementById('edit-prof-name').value;
                        u.area = document.getElementById('edit-prof-area').value;
                        u.experience = document.getElementById('edit-prof-exp').value;
                        u.hourlyRate = parseFloat(document.getElementById('edit-prof-rate').value) || 0;
                        u.skills = document.getElementById('edit-prof-skills').value.split(',').map(s => s.trim()).filter(Boolean);
                        u.bio = document.getElementById('edit-prof-bio').value;
                        u.avatar = document.getElementById('edit-prof-avatar').value;
                        this.currentUser = u;
                    }
                    return u;
                });
                this.setUsers(users);

                this.closeModal('modal-edit-profile');
                this.showToast('Perfil atualizado!', 'success');
                this.refreshCurrentView();
            }

            handleLogin(e) {
                e.preventDefault();
                const email = document.getElementById('login-email').value;
                const found = this.users.find(u => u.email.toLowerCase() === email.toLowerCase());

                if (found) {
                    this.setCurrentUser(found);
                    this.closeModal('modal-login');
                    this.showToast(`Bem-vindo(a) de volta, ${found.name}!`, 'success');
                } else {
                    this.showToast('E-mail não encontrado. Crie uma conta.', 'error');
                }
            }

            handleSignup(e) {
                e.preventDefault();
                const name = document.getElementById('signup-name').value;
                const email = document.getElementById('signup-email').value;
                const role = document.getElementById('signup-role').value;

                const newUser = {
                    id: 'usr_' + Date.now(),
                    name,
                    email,
                    role,
                    active: true,
                    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150',
                    skills: [],
                    rating: 5.0
                };

                const users = this.users;
                users.push(newUser);
                this.setUsers(users);

                this.setCurrentUser(newUser);
                this.closeModal('modal-signup');
                this.showToast('Conta criada com sucesso!', 'success');
            }

            handleRegisterAdmin(e) {
                e.preventDefault();
                const name = document.getElementById('adm-name').value;
                const email = document.getElementById('adm-email').value;
                const sector = document.getElementById('adm-sector').value;

                const newAdm = {
                    id: 'usr_admin_' + Date.now(),
                    name,
                    email,
                    role: 'admin',
                    active: true,
                    sector,
                    permissions: 'Geral',
                    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                };

                const users = this.users;
                users.push(newAdm);
                this.setUsers(users);

                this.addLog(`Novo administrador cadastrado: ${name} (${sector})`);
                this.closeModal('modal-new-admin');
                this.showToast('Administrador cadastrado com sucesso!', 'success');
                this.renderAdminDashboard();
            }

            showToast(msg, type = 'success') {
                const toast = document.getElementById('notification-toast');
                const title = document.getElementById('toast-title');
                const message = document.getElementById('toast-message');
                const icon = document.getElementById('toast-icon');

                title.textContent = type === 'error' ? 'Erro' : type === 'info' ? 'Informação' : 'Sucesso';
                message.textContent = msg;

                icon.className = type === 'error' ? 'fa-solid fa-circle-xmark text-red-400 text-lg' :
                                 type === 'info' ? 'fa-solid fa-circle-info text-blue-400 text-lg' :
                                 'fa-solid fa-circle-check text-emerald-400 text-lg';

                toast.classList.remove('hidden');
                setTimeout(() => this.hideToast(), 3500);
            }

            hideToast() {
                document.getElementById('notification-toast')?.classList.add('hidden');
            }
        }

        let app;
        window.addEventListener('DOMContentLoaded', () => {
            app = new FreelaHubApp();
            app.navigateTo('home');
        });

const productsData = [
    {
        name: "MacBook Pro 16-inch M3 Max",
        description: "The ultimate pro laptop. Powered by the M3 Max chip, it delivers extreme performance for the most demanding workflows with a brilliant Liquid Retina XDR display and up to 22 hours of battery life.",
        price: 289900.00,
        category: "Laptops",
        stock: 15,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?q=80&w=1000&auto=format&fit=crop"
        ]
    },
    {
        name: "Sony WH-1000XM5 Wireless Headphones",
        description: "Industry-leading noise cancellation. Two processors control 8 microphones for unprecedented noise cancellation. With Auto NC Optimizer, noise canceling is automatically optimized based on your wearing conditions.",
        price: 34990.00,
        category: "Audio",
        stock: 45,
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=1000&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1000&auto=format&fit=crop"
        ]
    },
    {
        name: "iPhone 15 Pro Max",
        description: "Forged in titanium and featuring the groundbreaking A17 Pro chip, a customizable Action button, and the most powerful iPhone camera system ever.",
        price: 159900.00,
        category: "Smartphones",
        stock: 30,
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1000&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1605236453806-6ff36851218e?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=1000&auto=format&fit=crop"
        ]
    },
    {
        name: "Samsung Galaxy S24 Ultra",
        description: "Welcome to the era of mobile AI. With Galaxy S24 Ultra in your hands, you can unleash whole new levels of creativity, productivity and possibility.",
        price: 129999.00,
        category: "Smartphones",
        stock: 25,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=1000&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1658428587123-0de325985012?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1585060544812-6b45742d762f?q=80&w=1000&auto=format&fit=crop"
        ]
    },
    {
        name: "Asus ROG Zephyrus G14",
        description: "The ROG Zephyrus G14 makes powerful, ultraportable Windows 11 gaming accessible to everyone. Featuring up to an AMD Ryzen 9 CPU and GeForce RTX GPU.",
        price: 139990.00,
        category: "Laptops",
        stock: 12,
        image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=1000&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1000&auto=format&fit=crop"
        ]
    },
    {
        name: "Canon EOS R5 Mirrorless Camera",
        description: "Experience the EOS R5: a full-frame mirrorless camera that continues the EOS legacy. Unprecedented 8K RAW internal video recording, 45-MP stills, and 5-axis IBIS.",
        price: 299000.00,
        category: "Cameras",
        stock: 8,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1516724562728-afc824a36e84?q=80&w=1000&auto=format&fit=crop"
        ]
    },
    {
        name: "DJI Mini 4 Pro Drone",
        description: "Mini 4 Pro is our most advanced mini-camera drone to date. It integrates powerful imaging capabilities, omnidirectional obstacle sensing, and ActiveTrack 360°.",
        price: 84990.00,
        category: "Cameras",
        stock: 20,
        image: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?q=80&w=1000&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1579829366248-204fe8413f31?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1473968512647-3ce1eca10bc1?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1581459468988-cb94ff217e57?q=80&w=1000&auto=format&fit=crop"
        ]
    },
    {
        name: "Apple Watch Ultra 2",
        description: "The most rugged and capable Apple Watch pushes the limits again. Featuring the all-new S9 SiP, a magical new way to use your watch without touching the screen.",
        price: 89900.00,
        category: "Wearables",
        stock: 40,
        image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?q=80&w=1000&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop"
        ]
    },
    {
        name: "Logitech MX Master 3S Wireless Mouse",
        description: "Feel every moment of your workflow with even more precision, tactility, and performance, thanks to Quiet Clicks and an 8,000 DPI track-on-glass sensor.",
        price: 9490.00,
        category: "Accessories",
        stock: 60,
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=1000&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1615663245857-ac1eeb536fcb?q=80&w=1000&auto=format&fit=crop"
        ]
    },
    {
        name: "Samsung 49-Inch Odyssey G9 Gaming Monitor",
        description: "Experience the ultimate gaming journey with the Odyssey G9's 1000R curved screen, QLED technology, 240Hz refresh rate, and 1ms response time.",
        price: 129000.00,
        category: "Monitors",
        stock: 5,
        image: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=1000&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?q=80&w=1000&auto=format&fit=crop"
        ]
    },
    {
        name: "Nintendo Switch OLED Model",
        description: "Play at home on the TV or on-the-go with a vibrant 7-inch OLED screen with the Nintendo Switch system - OLED model.",
        price: 34990.00,
        category: "Gaming",
        stock: 35,
        image: "https://images.unsplash.com/photo-1605901309584-818e25960b8f?q=80&w=1000&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1605901309584-818e25960b8f?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1612036781124-847f8939b154?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1563229618-918dc86888c3?q=80&w=1000&auto=format&fit=crop"
        ]
    },
    {
        name: "Sony PlayStation 5 Console",
        description: "Experience lightning-fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio.",
        price: 54990.00,
        category: "Gaming",
        stock: 20,
        image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=1000&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1622297845775-5ff3fef71d13?q=80&w=1000&auto=format&fit=crop"
        ]
    },
    {
        name: "Xbox Series X",
        description: "The fastest, most powerful Xbox ever. Play thousands of titles from four generations of consoles—all games look and play best on Xbox Series X.",
        price: 49990.00,
        category: "Gaming",
        stock: 18,
        image: "https://images.unsplash.com/photo-1621259182978-fbf93132e53d?q=80&w=1000&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1621259182978-fbf93132e53d?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1605901302636-f09bce05cc45?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1625805866449-3580fd13fe3a?q=80&w=1000&auto=format&fit=crop"
        ]
    },
    {
        name: "Amazon Echo Studio",
        description: "Our best-sounding Echo ever. Echo Studio creates an immersive, 3-dimensional soundscape, wrapping you in studio-quality audio from every direction.",
        price: 19990.00,
        category: "Smart Home",
        stock: 50,
        image: "https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=1000&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1518444065439-e91be1e11111?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1558089687-f282ffcbc126?q=80&w=1000&auto=format&fit=crop"
        ]
    },
    {
        name: "Google Nest Hub Max",
        description: "Whether you’re across the house or across the country, Nest Hub Max helps everyone stay in touch with auto-framing video calls and a 10-inch HD screen.",
        price: 22990.00,
        category: "Smart Home",
        stock: 25,
        image: "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?q=80&w=1000&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1584002636735-c328e12fe2b9?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=1000&auto=format&fit=crop"
        ]
    },
    {
        name: "Dyson V15 Detect Absolute",
        description: "The most powerful, intelligent cordless vacuum. A precisely-angled laser makes invisible dust visible on hard floors. Piezo sensor automatically sizes and counts dust particles.",
        price: 74990.00,
        category: "Home Appliances",
        stock: 14,
        image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?q=80&w=1000&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1558317374-067fb5f30001?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1581427506941-86f7b1d120a1?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1000&auto=format&fit=crop"
        ]
    },
    {
        name: "Bose QuietComfort Earbuds II",
        description: "These next-gen wireless earbuds are intelligently engineered to personalize the noise cancellation and sound performance to your ears.",
        price: 26900.00,
        category: "Audio",
        stock: 45,
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1000&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1606220588913-b3eea4119df9?q=80&w=1000&auto=format&fit=crop"
        ]
    },
    {
        name: "LG C3 Series 65-Inch OLED TV",
        description: "The LG OLED evo C-Series is powered by the a9 AI Processor Gen6—made exclusively for LG OLED—for beautiful picture and performance.",
        price: 159990.00,
        category: "Entertainment",
        stock: 10,
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=1000&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1461151304267-38535e780c79?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=1000&auto=format&fit=crop"
        ]
    },
    {
        name: "GoPro HERO12 Black",
        description: "The most versatile camera in the world. Incredible image quality, even better HyperSmooth video stabilization and a huge boost in battery life.",
        price: 39990.00,
        category: "Cameras",
        stock: 32,
        image: "https://images.unsplash.com/photo-1521404107153-623eabccafbb?q=80&w=1000&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1521404107153-623eabccafbb?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1526402927236-07ceb2fd1ac1?q=80&w=1000&auto=format&fit=crop"
        ]
    },
    {
        name: "Keychron Q1 Pro Wireless Custom Keyboard",
        description: "A premium 75% layout QMK/VIA wireless custom mechanical keyboard, packed with all premium features and unlimited possibilities.",
        price: 19990.00,
        category: "Accessories",
        stock: 22,
        image: "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=1000&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1511467687506-258dc7110190?q=80&w=1000&auto=format&fit=crop"
        ]
    },
    {
        name: "Herman Miller Aeron Chair",
        description: "The benchmark for ergonomic seating since 1994. The Aeron accommodates the widest range of activities and postures people adopt while working.",
        price: 135000.00,
        category: "Furniture",
        stock: 5,
        image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?q=80&w=1000&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1568222687108-724dc5c41ee4?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1581427506161-0df0bddd3cd3?q=80&w=1000&auto=format&fit=crop"
        ]
    },
    {
        name: "Secretlab TITAN Evo 2022",
        description: "The award-winning Secretlab TITAN Evo 2022 Series offers premium personalized ergonomics for absolute comfort through marathon gaming sessions or long work days.",
        price: 49990.00,
        category: "Furniture",
        stock: 28,
        image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=1000&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1558231908-1ccdf5ee2699?q=80&w=1000&auto=format&fit=crop"
        ]
    },
    {
        name: "iPad Pro 12.9-inch (M2)",
        description: "Astonishing performance. Incredibly advanced displays. Superfast wireless connectivity. Next-level Apple Pencil capabilities. Powerful new features in iPadOS 16.",
        price: 119900.00,
        category: "Tablets",
        stock: 16,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=1000&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1534224039826-c7a0ca711a25?q=80&w=1000&auto=format&fit=crop"
        ]
    },
    {
        name: "Oura Ring Gen3",
        description: "The revolutionary smart ring that tracks your sleep, activity, and recovery with unmatched accuracy, all wrapped in a sleek titanium design.",
        price: 29990.00,
        category: "Wearables",
        stock: 35,
        image: "https://images.unsplash.com/photo-1601134267252-c07a3c3ce5c3?q=80&w=1000&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1601134267252-c07a3c3ce5c3?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1509305717900-84f40e786d82?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1611077544026-6f8e7156c07d?q=80&w=1000&auto=format&fit=crop"
        ]
    },
    {
        name: "Bowers & Wilkins Zeppelin",
        description: "The smart wireless speaker reimagined. The new Zeppelin delivers high-resolution stereo sound with smart, connected features and services.",
        price: 69990.00,
        category: "Audio",
        stock: 10,
        image: "https://images.unsplash.com/photo-1582239634288-04f8aa4c3300?q=80&w=1000&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1582239634288-04f8aa4c3300?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1550005934-2e9701a5ffb4?q=80&w=1000&auto=format&fit=crop"
        ]
    },
    {
        name: "Breville Barista Touch Espresso Machine",
        description: "Barista-quality performance with new intuitive touch screen display with pre-programmed café drinks menu and automatic milk texturing.",
        price: 89990.00,
        category: "Home Appliances",
        stock: 12,
        image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?q=80&w=1000&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1520206183501-b80cbadf1dd9?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1495474472207-464ba65b62b0?q=80&w=1000&auto=format&fit=crop"
        ]
    },
    {
        name: "Razer Blade 16 Gaming Laptop",
        description: "Experience absolute power with the world’s first dual-mode mini-LED display. Swap between ultra-sharp 4K and ultra-fast 1080p 240Hz.",
        price: 249000.00,
        category: "Laptops",
        stock: 6,
        image: "https://images.unsplash.com/photo-1628105658607-cc7e4ec1503e?q=80&w=1000&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1628105658607-cc7e4ec1503e?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1542393545-10f5cde2c810?q=80&w=1000&auto=format&fit=crop"
        ]
    },
    {
        name: "Kindle Oasis",
        description: "Our best 7\", 300 ppi flush-front Paperwhite display. Adjustable warm light to shift screen shade from white to amber.",
        price: 21990.00,
        category: "Tablets",
        stock: 42,
        image: "https://images.unsplash.com/photo-1605372338421-d1fbb1fce98a?q=80&w=1000&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1605372338421-d1fbb1fce98a?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1505682634904-d7c8d95cdc50?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1000&auto=format&fit=crop"
        ]
    },
    {
        name: "Yeti Rambler 20 oz Tumbler",
        description: "Any tumbler that's coming along for the ride needs to be tough enough to keep up. Our fan-favorite Rambler 20 oz. Tumbler is made from durable stainless steel with double-wall vacuum insulation.",
        price: 2990.00,
        category: "Lifestyle",
        stock: 100,
        image: "https://images.unsplash.com/photo-1614838637953-294025a1e2f9?q=80&w=1000&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1614838637953-294025a1e2f9?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1520114092415-0d2bdba9618f?q=80&w=1000&auto=format&fit=crop"
        ]
    },
    {
        name: "Peak Design Everyday Backpack 20L",
        description: "An iconic, award-winning pack for everyday and photo carry, the Everyday Backpack is built around access, organization, expansion, and protection.",
        price: 24900.00,
        category: "Lifestyle",
        stock: 15,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1000&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1491336477066-31156b5e4f35?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1000&auto=format&fit=crop"
        ]
    }
];

export default productsData;
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './home.component.html'
})
export class HomeComponent {
    items = [
        {
            name: 'James Carter',
            role: 'Art Collector',
            description: `“SIA Walls completely transformed my living space. The art I rented looked like it was made for my home. The process was smooth, and the team took care of everything—from helping me choose the right piece to installation. I’m already planning my next swap!”`,
            profileimg: 'assets/imgs/home/testimonial/profile-1.png', // Replace with actual image URL
            bgimg: 'assets/imgs/home/testimonial/bg-1.png', // Replace with actual background image
            starcount: 5
        },
        {
            name: 'Anna Smith',
            role: 'Interior Designer',
            description: `“The selection was amazing and made my projects so much easier. I loved how professional the team was throughout the process.”`,
            profileimg: 'assets/imgs/home/testimonial/profile-2.png',
            bgimg: 'assets/imgs/home/testimonial/bg-2.png',
            starcount: 4
        },
        {
            name: 'Michael Lee',
            role: 'Homeowner',
            description: `“Beautiful art pieces that fit perfectly into my living room. Great experience from start to finish!”`,
            profileimg: 'assets/imgs/home/testimonial/profile-3.png',
            bgimg: 'assets/imgs/home/testimonial/bg-3.png',
            starcount: 5
        }
    ];
    arts = [
        {
            name: 'Floral Art',
            bgimg: 'assets/imgs/home/art/bg-1.png'
        },
        {
            name: 'Abstract Art',
            bgimg: 'assets/imgs/home/art/bg-2.png'
        },
        {
            name: 'Traditional Art',
            bgimg: 'assets/imgs/home/art/bg-3.png'
        }
    ];
    features = [
        {
            "category": "Abstract",
            "image": "assets/img/product/product1.png",
            "name": "Devi",
            "id": "SP_001",
            "artist": "Shradda Pundeer",
            "rating": 5,
            "rent": "$20",
            "rent_type": "permonth",
            "buy": "$500",
            "category_groups": "Figurative Abstract, contemporary, home decor",
            "size": "30 inch X 24 inch",
            "original": "Original/ gallery wrapped canvas. Limited Series",
            "material": "Acrylic & gel medium on gallery wrapped canvas",
            "avl_rent": "Yes",
            "avl_purchase": "Yes",
            "framed": "No",
            "description": "This evocative piece celebrates the essence of womanhood, capturing the quiet strength, resilience, and nurturing energy that sustains and balances the world around us. A powerful tribute to the divine feminine, it brings depth and warmth to any space."
        },
        {
            "category": "Abstract",
            "image": "assets/img/product/product2.png",
            "name": "Celebrations",
            "id": "SP_002",
            "artist": "Shradda Pundeer",
            "rating": 5,
            "rent": "$20",
            "rent_type": "permonth",
            "buy": "$500",
            "category_groups": "Figurative abstract, contemporary art, home decor, acrylic painting, canvas painting",
            "size": "30 inch X 24 inch",
            "original": "Original / gallery wrapped canvas, limited series",
            "material": "Acrylic & gel medium on gallery wrapped canvas",
            "avl_rent": "Yes",
            "avl_purchase": "Yes",
            "framed": "No",
            "description": "This acrylic painting bursts with vibrant colors and expressive brushstrokes, capturing the essence of celebration and joy. Every detail radiates positive energy, making it a perfect piece to uplift any space with warmth and good vibes."
        },
        {
            "category": "Abstract",
            "image": "assets/img/product/product3.png",
            "name": "Serendipity",
            "id": "SP_003",
            "artist": "Shradda Pundeer",
            "rating": 5,
            "rent": "$20",
            "rent_type": "permonth",
            "buy": "$700",
            "category_groups": "Figurative abstract, canvas painting,contemporary art, decor",
            "size": "48 inch X 36 inch",
            "original": "Original / gallery wrapped canvas, limited series",
            "material": "Acrylic & textured paste on gallery wrapped canvas",
            "avl_rent": "Yes",
            "avl_purchase": "Yes",
            "framed": "No",
            "description": "This piece resonates with one’s personal style, inspiring a quiet sense of joy and contentment."
        },
        {
            "category": "Abstract",
            "image": "assets/img/product/product4.png",
            "name": "Essence",
            "id": "SP_004",
            "artist": "Shradda Pundeer",
            "rating": 5,
            "rent": "$20",
            "rent_type": "permonth",
            "buy": "$500",
            "category_groups": "Figurative abstract, canvas painting,contemporary art, decor",
            "size": "30 inch X 24 inch",
            "original": "Original / gallery wrapped canvas, limited series",
            "material": "Acrylic & gel medium on gallery wrapped canvas",
            "avl_rent": "Yes",
            "avl_purchase": "Yes",
            "framed": "No",
            "description": "This piece explores the concept of essence — the core of who we truly are. Through deliberate brushstrokes and a harmonious blend of pastels and vibrant hues, the artwork seeks balance between subtlety and intensity. It invites the viewer to reflect on what defines their own true nature."
        },
        {
            "category": "Abstract",
            "image": "assets/img/product/product5.png",
            "name": "Silent flow",
            "id": "SP_005",
            "artist": "Shradda Pundeer",
            "rating": 5,
            "rent": "$20",
            "rent_type": "permonth",
            "buy": "$700",
            "category_groups": "Figurative abstract, canvas painting,contemporary art, decor",
            "size": "NA",
            "original": "Original on stretch board canvas",
            "material": "Acrylic on canvas",
            "avl_rent": "Yes",
            "avl_purchase": "Yes",
            "framed": "No",
            "description": "It’s a piece that invites reflection—evoking themes of inner stillness, identity, and the harmony between the physical and the spiritual."
        },
        {
            "category": "Lantern Art",
            "image": "assets/img/product/product2.png",
            "name": "Lit up the Night",
            "id": "SU_000",
            "artist": "Surya Patil",
            "rating": 5,
            "rent": "$20",
            "rent_type": "permonth",
            "buy": "$1200",
            "category_groups": "Lantern Art, Night Sky Painting, Chinese Lanterns, Starry Night, Celebration Art, Dreamscape, Hope & Peace, Enchanting Painting, Asian-Inspired Art, Magical Night",
            "size": "30 inch X 24 inch",
            "original": "Original Artwork",
            "material": "Acrylic on canvas",
            "avl_rent": "Yes",
            "avl_purchase": "Yes",
            "framed": "No",
            "description": "In a painting featuring Chinese orange lanterns in the night sky, the scene is enchanting and filled with a sense of wonder and celebration. The backdrop is a deep, velvety night sky, painted in rich shades of midnight blue and black, speckled with distant stars that twinkle softly.Floating gracefully across this dark canvas are numerous Chinese lanterns, their warm orange glow creating a striking contrast against the coolness of the night. This painting evokes feelings of peace, hope, and celebration, inviting viewers to imagine the quiet joy of watching lanterns ascend into the night, carrying wishes and dreams skyward."
        }];
    faqs = [
        {
            sno: '1',
            question: 'How does the art rental process work?',
            answer: 'Renting art with SIA Walls is effortless and flexible, letting you enjoy curated pieces in your space without a long-term commitment. Simply choose your favorites from our handpicked collection and let us know. We handle delivery or pickup, often with a chance to meet the artist. Optional professional installation and white-glove service complete a seamless experience.'
        },
        {
            sno: '2',
            question: 'Can I buy the artwork after renting it?',
            answer: 'Definitely! If you’ve grown attached to an artwork and want to keep it, just reach out. We show both the rental and sale price right away, so you know your options. If the piece is up for sale, we’ll help make it yours—quick and easy. Turn your temporary art into a permanent treasure.'
        },
        {
            sno: '3',
            question: 'Do you offer installation services?',
            answer: 'Yes, we provide professional installation services to ensure your artwork is displayed perfectly. Our team will handle everything from safe delivery to secure mounting in your chosen location. We use the right tools and techniques to protect both the artwork and your walls. This way, you can enjoy your new piece with complete peace of mind.'
        },
        {
            sno: '4',
            question: 'How often can I swap my rented artwork?',
            answer: 'After a three-month minimum rental period, you can swap your artwork as often as you like—perfect for refreshing your space whenever inspiration strikes. Many clients change pieces seasonally or whenever they’re ready for a new vibe. Just contact our team to arrange the exchange and choose your next piece. A small swap fee applies for logistics, making it an easy way to keep your space fresh and inspiring.'
        },
        {
            sno: '5',
            question: 'Do I need to insure the artwork?',
            answer: 'We’ve got insurance to cover the artwork while it’s with you, but it’s a smart move to add extra coverage for yourself—either through your own insurance or by listing the piece with your home or business policy. That way, you’re double-covered and can enjoy your art worry-free!'
        }
    ];
}

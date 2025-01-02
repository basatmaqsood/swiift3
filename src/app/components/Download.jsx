
import React from 'react';
import { 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Twitter, 
  MapPin
} from 'lucide-react';


const DownloadAndFooter = () => {
  const footerLinks = {
    company: [
      { title: 'About Us', href: '/aboutus' },
      { title: 'Careers', href: '/careers' },
      { title: 'Press', href: '/#' },
      { title: 'Blog', href: '/#' }
    ],
    legal: [
      { title: 'Terms of Service', href: '/resources#terms' },
      { title: 'Privacy Policy', href: '/resources#privacy' },
      { title: 'Cookie Policy', href: '/resources#privacy' },
      { title: 'Disclaimer', href: '/resources#insurance' }
    ],
    support: [
      { title: 'Help Center', href: '/support' },
      { title: 'Safety', href: '/support' },
      { title: 'Lost & Found', href: '/support' },
      { title: 'Contact Us', href: '/support' }
    ],
    cities: [
      { title: 'Johannesburg', href: '/careers#positions' },
      { title: 'Cape Town', href: '/careers#positions' },
      { title: 'Durban', href: '/careers#positions' },
      { title: 'Pretoria', href: '/careers#positions' }
    ]
  };

  return (
    <>
      {/* Download Section */}
      <section className="bg-white py-24 overflow-hidden" id='app-download'>
        <div className="max-w-7xl mx-auto px-6">
          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
              Your Safe Ride Home is
              <span className="text-yellow-400"> One Tap </span>
              Away
            </h2>
            
            <p className="text-xl text-gray-600 mb-12 text-center">
              Join thousands of South Africans who trust Swift! for safe, reliable, and affordable rides. Download the app and experience the difference today.
            </p>

            {/* App Mockup Placeholder - Full Width */}
            <div className="relative mb-12">
              <div className=" bg-gray-100 rounded-2xl overflow-hidden">
                {/* Actual image will replace this placeholder */}
                <img
                  src='downloadApp.jpg'
                  alt="Swift App Interface" 
                  className=" h-full w-full object-cover inset-0"
                />
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-8 mb-12 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">1M+</div>
                <p className="text-gray-600 text-2xl">Happy Riders</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
                <p className="text-gray-600 text-2xl">Cities Nationwide</p>
              </div>
            </div>

            {/* Download Buttons - Centered */}
            <div className="flex items-center justify-center space-x-4">
              <a 
                href="#" 
                className=''
              >
                <img 
                  src='appstore.jpg'
                  alt="Download on App Store" 
                  width={165}
                  height={48}
                />
              </a>
              <a 
                href="#" 
              >
                <img
                 width={165}
                 height={48}
                  src='googleplay.png'
                  alt="Get it on Google Play" 
                />
              </a>
              <a href='#' className=" hover:bg-yellow-400 transition-colors rounded-xl">
                    <img 
                      src="huaweiStore.jpg" 
                      alt="Play Store" 
                      className="w-auto h-12  "
                    />
                  </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Swift<span className="text-yellow-400">!</span>
                </h3>
                <p className="text-gray-600 mt-2">
                  South Africa&apos;s most innovative e-hailing service.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-600">
                  <Phone className="w-5 h-5" />
                  <span>0800 SWIFT SA</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Mail className="w-5 h-5" />
                  <span>support@swift.co.za</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <MapPin className="w-5 h-5" />
                  <span>Johannesburg, South Africa</span>
                </div>
              </div>
            </div>

            {/* Links Columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-gray-900 font-semibold mb-4 uppercase text-sm">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.title}>
                      <a 
                        href={link.href}
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-600 text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} Swift! All rights reserved.
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>

              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default DownloadAndFooter;

/*
Implementation Guide
==================

1. Required Dependencies:
```bash
npm install lucide-react
```

2. Required Assets:
- app-interface.png (1920x1080px)
- app-store.svg
- play-store.svg
- Any brand fonts

3. Integration:
```jsx
import DownloadAndFooter from './components/DownloadAndFooter';

// In your page/layout:
<DownloadAndFooter />
```

4. Key Features:
- Responsive layout
- Image placeholder
- Interactive buttons
- Comprehensive footer
- Social links
- Contact information

5. Customization:
- Update footerLinks object for navigation
- Modify contact information
- Add/remove social links
- Adjust colors via Tailwind classes
- Update copy and content

6. Image Handling:
- Replace placeholder with actual app interface
- Maintain 16:9 aspect ratio
- Ensure high resolution
- Optimize for web

7. Accessibility:
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus states

8. Performance:
- Lazy load images
- Optimize SVGs
- Minimize reflows
- Efficient grid system

9. Browser Support:
- Modern browsers
- Flexbox/Grid support
- CSS transitions
- SVG support

10. Testing Checklist:
- [ ] Responsive behavior
- [ ] Link functionality
- [ ] Image loading
- [ ] Footer navigation
- [ ] Social links
- [ ] Contact information
- [ ] Copyright year
- [ ] Button states
*/

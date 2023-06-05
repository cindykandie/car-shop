import MainLogo from './mainlogo';

export default function Footer() {
  return (
    <div className='flex flex-col gap-5 mt-8 bg-blue-200 p-6'>
        <div>
            <MainLogo />
            <p>
            Motokaa is a direct import car service powered by Carmax East Africa Limited.
            <br/>
            Muchai Drive, off Ngong Road, Opp. Coptic Hospital
            <br/>
            info@motokaa.shop
            </p>
        </div>
        <div>
            <ul>
                <h3>About</h3>
                <li>About us</li>
                <li>Carmax EA Ltd</li>
                <li>Backend</li>
            </ul>
            <ul>
                <h3>Quick Links</h3>
                <li>Stocks</li>
                <li>Financing</li>
                <li>Insurance</li>
            </ul>
            <ul>
                <h3>Other Links</h3>
                <li>Terms</li>
                <li>Privacy</li>
                <li>Support</li>
            </ul>
            <ul>
                <h3>Get Started</h3>
                <li>How it works</li>
                <li>FAQs</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <div>
            <p>Copyright © 2023 Motokaa - Imports powered by Carmax East Africa Ltd. All rights reserved.
            </p>
            <div>
                <p>Import terms</p>
                <p>Financing terms</p>
            </div>
        </div>
    </div>
  );
}

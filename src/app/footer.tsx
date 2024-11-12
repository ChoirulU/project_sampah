export default function Footer() {
  return (
    <footer className="flex justify-between items-center bg-green-800 w-full py-2 px-14">
      <p className="text-white">© 2024 Pemuda Berkharisma. All rights reserved.</p>
      <ul className="flex space-x-3 ml-5 mt-2 items-center text-white">
        <li className="text-gray-300 hover:text-black cursor-pointer">Privacy Policy</li>
        <li className="text-gray-300 hover:text-black cursor-pointer">Terms of Service</li>
        <li className="text-gray-300 hover:text-black cursor-pointer">Contact Us</li>
      </ul>
    </footer>
  );
}

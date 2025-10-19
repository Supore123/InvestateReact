# Investate - Smart Property Investment App

A modern React Native mobile app for property investment analysis and management. Browse properties, analyze investments, track favorites, and make informed real estate decisions.

## Features

- 🏠 Browse property listings with detailed metrics
- 📊 View property investment analytics (cap rate, ROI, cash flow)
- ⭐ Save favorite properties
- 🌓 Dark/Light mode support
- 👤 User profile management

## Prerequisites

Before running the app, make sure you have the following installed:
- Node.js (v18 or newer)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- Expo Go app on your iOS/Android device

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/Supore123/Investate.git
cd Investate/investate-app
```

2. Install dependencies:
```bash
npm install
# or if using yarn
yarn install
```

3. Start the development server:
```bash
npx expo start
```

4. Run the app:
- 📱 Scan the QR code with your iPhone's camera (iOS) or Expo Go app (Android)
- 💻 Press 'i' for iOS simulator or 'a' for Android emulator
- 🌐 Press 'w' to run in web browser

## Development Notes

- The app uses Expo for easy development and testing
- Navigation is handled by React Navigation
- Property data is stored in `src/data/properties.json`
- Styles support both light and dark themes

## Project Structure

```
investate-app/
├── src/
│   ├── screens/         # Main app screens
│   ├── components/      # Reusable components
│   ├── data/           # Sample property data
│   ├── services/       # Data services
│   ├── theme/          # Theme configuration
│   └── types/          # TypeScript types
├── App.tsx             # App entry point
└── package.json        # Dependencies
```

## Troubleshooting

If you encounter any issues:

1. Make sure all dependencies are installed:
```bash
npm install
```

2. Clear Metro bundler cache:
```bash
npx expo start --clear
```

3. Make sure Expo Go is up to date on your device

## Contributing

Feel free to open issues or submit pull requests for any improvements.
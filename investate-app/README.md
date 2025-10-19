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

## Building and Testing

### Building for Production

1. Install the latest Expo EAS CLI:
```bash
npm install -g eas-cli
```

2. Log in to your Expo account:
```bash
eas login
```

3. Configure the build:
```bash
eas build:configure
```

4. Build for your target platform:
```bash
# For Android
eas build --platform android
# For iOS
eas build --platform ios
```

### Testing the App

#### 1. Main Menu Navigation
- Launch the app and verify the Gold Tier membership display
- Test both the "Family House" and "Investment" options
- Verify the back button functionality in the Family House menu

#### 2. Investment Features
- Navigate to the Investment Hub through the main menu
- Test each investment strategy card:
  - Buy-to-Let
  - Property Flip
  - REIT Investment
  - Commercial Property
- Verify ROI and risk level displays
- Test the property search functionality
- Check market analysis section responsiveness

#### 3. Property Search
- Use the search bar to find properties
- Test filtering by:
  - Location
  - Price range
  - Property type
- Verify property card displays:
  - Address
  - Price
  - Key metrics (Cap Rate, ROI, etc.)

#### 4. Property Details
- Select a property to view detailed analytics
- Test the street view functionality
- Verify metrics calculations
- Check performance chart rendering

#### 5. Profile Features
- Navigate to the Profile section
- Verify Gold Tier membership display
- Check stats display:
  - Favorites count
  - Investments count
  - Watchlist items
- Test recent activity updates

#### 6. Theme Testing
- Test theme toggle functionality
- Verify UI elements in both light and dark modes
- Check readability and contrast

### Common Test Scenarios

1. Investment Analysis Flow:
```
Main Menu → Investment → Search Properties → Property Details → Analytics
```

2. Family House Search Flow:
```
Main Menu → Family House → Search → Property Details
```

3. Profile Management:
```
Main Menu → Profile → View Stats → Recent Activity
```

### Performance Testing

Run the following checks:
1. Cold start time < 3 seconds
2. Property search response < 1 second
3. Street view loading < 2 seconds
4. Theme switch < 0.5 seconds

### Error Handling

Test the following scenarios:
1. No internet connection
2. Invalid property searches
3. Missing street view data
4. API failures

## Contributing

Feel free to open issues or submit pull requests for any improvements.
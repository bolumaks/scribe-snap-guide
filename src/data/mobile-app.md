# NovelNest

NovelNest is a mobile reading & social platform built with **Expo + React Native** and **expo-router**.

It lets users explore novels by **genre** and **collection**, read them chapter-by-chapter in a **customizable reader**, and engage socially through **posts, comments, likes, follows, notifications, and messages**.

The app also supports **personal libraries**, **premium subscriptions via Flutterwave**, and **monetization with AdMob**.

---

## Features

- **Browse & Discover**

- Explore novels by **genre** and **collections**

- Horizontal category strips with “See More” links

- **Novel Details**

- Cover, meta (views/likes/chapters), similar novels

- Add/remove from personal library

- **Reading Experience**

- WebView-based reader

- Customizable reading settings (font size, font family, background)

- Chapter navigation (prev/next, chapter list modal)

- Auto-add to reading list on open

- **Social**

- Global feed, following feed, and novel-specific posts

- Like, comment, and create/edit posts

- **User**

- Auth (login/admin login)

- Notifications & messages

- Saved & reading lists

- **Premium & Monetization**

- Flutterwave-powered subscription

- AdMob-ready (banner, interstitial, rewarded ads)

---

## Tech Stack

- **Framework**: Expo (TypeScript) + expo-router

- **UI**: Gluestack UI + NativeWind/Tailwind

- **State**: Zustand + AsyncStorage

- **Data**: Axios + React Query

- **Reader**: WebView with dynamic styling

- **Payments**: Flutterwave RN SDK

- **Ads**: react-native-google-mobile-ads

- **Theming**: Tailwind config + custom `ThemeToggle`

---

## Project Structure (Key Parts)

```

app/

novel/[id].tsx # Novel details

read-novel/[id].tsx # Reader

genre-novels/[id].tsx # Genre list

create-post/[id].tsx # Post creation

components/ # UI components

constants/

constants.ts # API routes, Ads IDs, subscription endpoints

controller.ts # Axios request helpers

interface.ts # TS types/interfaces

Colors.ts # Color theme

context/store.ts # Zustand store (user, settings, library)

tailwind.config.js # Tailwind setup

gluestack-ui.config.json # Gluestack UI theme

```

---

## Prerequisites

- Node.js **18+**

- npm or yarn

- Expo CLI & EAS CLI (`npm i -g eas-cli`)

- Android Studio + SDK (for Android builds)

- Xcode (for iOS builds)

- Backend REST API reachable at `BASE_URL`

- Flutterwave account + public key

- AdMob App & Unit IDs

---

## Getting Started

1.  **Unzip & Install**
    Unzip the downloaded code. After unzipping you will have NovelNest - App Code zip folder. Unzip that folder, open in your preferred editor and run:

```bash
npm install
```

2.  **Configure Environment**

- Update `constants/constants.ts` → `BASE_URL`

- Add `.env`:

Create an account on [Flutterwave](https://onboarding.flutterwave.com/signup) and get your public key.

```bash
EXPO_PUBLIC_FLW_PUBLIC_KEY=your_flutterwave_key
```

3.  **Run in Expo**

```bash
npx expo start
```

> ⚠️ For AdMob & Flutterwave SDK, use a **dev client**.

4.  **Build Dev Client**

```bash
eas login

eas build --profile development --platform android

npx expo start --dev-client
```

Expo documentation [here](https://docs.expo.dev/get-started/introduction/). Development build documentation [here](https://docs.expo.dev/develop/development-builds/introduction/)

---

## Example `.env`

```env

EXPO_PUBLIC_FLW_PUBLIC_KEY=your_flutterwave_public_key

EXPO_PUBLIC_API_URL=https://api.yourbackend.com/api

EXPO_PUBLIC_ADMOB_ANDROID_APP_ID=ca-app-pub-xxxxxxxx~yyyyyyyy

EXPO_PUBLIC_ADMOB_IOS_APP_ID=ca-app-pub-xxxxxxxx~zzzzzzzz

```

---

## Modifying the Project

- **Add API endpoints**: edit `constants/constants.ts`

- **New screen/route**: create under `app/…` (expo-router)

- **Update styling**: change `tailwind.config.js` or `Colors.ts`

- **Update naming**: change `app.json`
  ![App.json](https://raw.githubusercontent.com/bolumaks/scribe-snap-guide/refs/heads/main/public/appjson.png)
  Replace all instances of "novelnest" with your app name and Change the package name.
- **Update app assets**: import and replace the logo, icon, adaptive icon
  ![App assets](https://raw.githubusercontent.com/bolumaks/scribe-snap-guide/refs/heads/main/public/assets.png)
  ![enter image description here](https://raw.githubusercontent.com/bolumaks/scribe-snap-guide/refs/heads/main/public/assets_folder.png)
- **Reader tweaks**: adjust `context/store.ts` & `ReadingSettingsDialog`

- **Ads**: replace AdMob IDs in `constants/constants.ts`. Get started with AdMob [here](https://admob.google.com/home/).

- **Payments**: confirm `EXPO_PUBLIC_FLW_PUBLIC_KEY` is set

---

## 🧪 Testing

```bash
npm  run  test
```

Uses **Jest** + **React Testing Library**.

---

## 🚢 Deployment Notes

- Replace `BASE_URL` with production API

- Use real AdMob IDs

- Secure Flutterwave keys (server verification recommended)

- Test on physical devices for WebView & Ads

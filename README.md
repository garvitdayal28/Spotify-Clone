# 🎵 Spotify Clone

A modern, responsive web application that replicates the core functionality and design of Spotify's web player. Built with vanilla HTML, CSS, and JavaScript, this project features a sleek dark interface with full audio playback capabilities.

## ✨ Features

### 🎵 Audio Player
- **Play/Pause Controls**: Start and stop music playback
- **Next/Previous Track**: Navigate through the song collection
- **Seek Bar**: Interactive progress bar to jump to any part of the song
- **Volume Control**: Adjustable volume slider with mute functionality
- **Time Display**: Current time and total duration of tracks

### 🎨 User Interface
- **Spotify-Inspired Design**: Dark theme with authentic Spotify color scheme
- **Responsive Layout**: Clean two-panel layout (sidebar + main content)
- **Interactive Cards**: Hover effects on song and artist cards
- **Trending Songs Section**: Curated collection of popular tracks
- **Popular Artists Section**: Featured artists with circular profile images

### 🎧 Song Collection
The app includes 6 pre-loaded songs:
1. **Sapphire** - Ed Sheeran
2. **505** - Arctic Monkeys
3. **Birds of a Feather** - Billie Eilish
4. **Feel It** - d4vd
5. **7 Years** - Lukas Graham
6. **Summertime Sadness** - Lana Del Rey

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (due to CORS restrictions for loading audio files)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Spotify-Clone
   ```

2. **Set up a local server**
   
   **Option 1: Using Python**
   ```bash
   # Python 3
   python -m http.server 3000
   
   # Python 2
   python -SimpleHTTPServer 3000
   ```
   
   **Option 2: Using Node.js**
   ```bash
   npx http-server -p 3000
   ```
   
   **Option 3: Using Live Server (VS Code Extension)**
   - Install the Live Server extension in VS Code
   - Right-click on `index.html` and select "Open with Live Server"

3. **Open in browser**
   Navigate to `http://localhost:3000` (or the port your server is running on)

## 📁 Project Structure

```
Spotify-Clone/
├── index.html          # Main HTML structure
├── style.css           # Primary styles and layout
├── utility.css         # Utility classes for common styles
├── script.js           # JavaScript functionality
├── favicon.ico         # Browser tab icon
├── README.md           # Project documentation
├── songs/              # Audio files directory
│   ├── 1.SAPPHIRE.mp3
│   ├── 2.505.mp3
│   ├── 3.BIRDS OF A FEATHER.mp3
│   ├── 4.FEEL IT.mp3
│   ├── 5.7 YEARS.mp3
│   └── 6.SUMMERTIME SADNESS.mp3
└── assets/             # SVG icons and images
    ├── logo.png
    ├── logo.svg
    ├── play.svg
    ├── pause.svg
    ├── next.svg
    ├── previous.svg
    ├── volume.svg
    ├── mute.svg
    ├── home.svg
    ├── search.svg
    ├── plus-sign.svg
    ├── play-btn.svg
    ├── pause-btn.svg
    ├── left-arrow.svg
    ├── right-arrow.svg
    └── hamburger.svg
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and audio elements
- **CSS3**: Modern styling with Flexbox, transitions, and hover effects
- **JavaScript (ES6+)**: Audio API, DOM manipulation, and event handling
- **Google Fonts**: Roboto font family for typography

## 🎯 Key Functionality

### Audio Management
- Utilizes the HTML5 Audio API for music playback
- Dynamic song loading from the `/songs` directory
- Real-time progress tracking and seek functionality
- Volume control with range slider

### Interactive Elements
- Click-to-play functionality on song cards
- Hover effects with smooth transitions
- Responsive play button overlays
- Dynamic UI updates based on playback state

### Responsive Design
- Flexible layout that adapts to different screen sizes
- Scrollable card containers for song and artist collections
- Modern CSS Grid and Flexbox for layout management

## 🔧 Customization

### Adding New Songs
1. Add your `.mp3` files to the `/songs` directory
2. Update the song cards in `index.html` with new track information
3. Ensure album artwork URLs are updated accordingly

### Styling
- Modify `style.css` for layout and component-specific styles
- Update `utility.css` for common utility classes
- Color scheme can be adjusted by changing CSS custom properties

## 🌟 Future Enhancements

- [ ] Playlist creation and management
- [ ] Search functionality
- [ ] User authentication
- [ ] Shuffle and repeat modes
- [ ] Responsive mobile design
- [ ] Audio visualization
- [ ] Dark/Light theme toggle
- [ ] Integration with music APIs

## 🐛 Known Issues

- Requires a local server to run due to CORS restrictions
- Limited to pre-loaded songs
- No persistent playback state

## 📝 License

This project is created for educational purposes. All music and images are used for demonstration only.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or suggestions, please open an issue in the repository.

---

**Enjoy the music! 🎶**

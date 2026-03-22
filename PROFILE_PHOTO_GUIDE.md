# How to Add Your Profile Photo

## Quick Steps:

### Option 1: Use Your Own Image (Recommended)

1. **Save your profile photo** in the `src/assets/` folder
   - Name it something like `profile-photo.jpg` or `profile-photo.png`
   - Recommended size: 300x300 pixels or larger (square format works best)

2. **Update Hero.jsx**:
   - Uncomment line 4: `// import profilePhoto from '../assets/profile-photo.jpg';`
   - Change the filename to match your image
   - Replace the placeholder image src on line 13 with `{profilePhoto}`

   Example:
   ```javascript
   import profilePhoto from '../assets/profile-photo.jpg';
   
   // Then in the JSX:
   <img 
       src={profilePhoto} 
       alt="Profile" 
       className="profile-img"
   />
   ```

### Option 2: Use an Online Image URL

Simply replace the current placeholder URL in `Hero.jsx` (line 13) with your image URL:

```javascript
<img 
    src="https://your-image-url.com/photo.jpg" 
    alt="Profile" 
    className="profile-img"
/>
```

## Features Included:

✅ **Circular profile photo** with animated gradient border
✅ **Hover effect** - slight zoom on hover
✅ **Rotating gradient animation** - smooth color transitions
✅ **Responsive design** - automatically adjusts size on mobile
✅ **Professional styling** - matches your portfolio theme

## Current Setup:

The profile photo is currently using a placeholder image from `via.placeholder.com`. 
Replace it with your actual photo to personalize your portfolio!

## Tips:

- Use a high-quality, professional headshot
- Square images work best (1:1 aspect ratio)
- Recommended minimum size: 300x300 pixels
- Supported formats: JPG, PNG, WebP

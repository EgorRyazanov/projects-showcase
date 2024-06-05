import { Avatar, Stack } from '@mui/material';
import { memo, useState } from 'react';
import classNames from './Gallery.module.scss';

interface GalleryProps {
    readonly images: Array<string>;
    readonly alt?: string;
}

export const Gallery = memo((props: GalleryProps) => {
    const { images, alt } = props;
    const [mainImage, setMainImage] = useState(images[0]!);
    const [thumbnails, setThumbnails] = useState(images.slice(1));
    // const [thumbnails, setThumbnails] = useState([
        // 'https://placehold.co/400',
        // 'https://placehold.co/500',
        // 'https://placehold.co/600',
        // 'https://placehold.co/700',
        // 'https://placehold.co/800',
    // ]);

    const handleThumbnailClick = (clickedImage: string) => {
        setMainImage(clickedImage);
        setThumbnails(prevThumbnails => {
            const newThumbnails = prevThumbnails.filter(image => image !== clickedImage);
            return [mainImage, ...newThumbnails];
        });
    };

    return (
        <Stack className={classNames.gallery}>
            <Avatar className={classNames.mainImage} variant="square" src={mainImage} alt={alt ?? 'Картинка проекта'} />
            <Stack className={classNames.thumbnails}>
                {thumbnails.map(image => (
                    <Avatar
                        key={image}
                        src={image}
                        alt={alt ?? 'Картинка проекта'}
                        onClick={() => handleThumbnailClick(image as string)}
                        sx={{
                            cursor: 'pointer',
                            width: '110px',
                            height: '110px',
                        }}
                    />
                ))}
            </Stack>
        </Stack>
    );
});

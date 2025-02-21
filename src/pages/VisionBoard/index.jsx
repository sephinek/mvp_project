import { useEffect, useState } from 'react';
import ReflectionVisionBoard from '../../components/atoms/ReflectionVisionBoard';
import ReflectionEmptyState from '../../components/atoms/ReflectionEmptyState';
import styles from './index.module.css';

export default function VisionBoard() {
  const [images, setImages] = useState([]);

  const handleFileChange = (e) => {
    const {
      target: { files },
    } = e;
    setImages((prev) => [
      ...prev,
      ...Array.from(files).map((file) => URL.createObjectURL(file)),
    ]);
  };

  return (
    <section className={styles.wrap}>
      {!images.length ? (
        <>
          <ReflectionEmptyState></ReflectionEmptyState>
          <label
            htmlFor='fileInput'
            className={styles['file-input-label']}
            aria-label='이미지 첨부'
          ></label>
          <input
            type='file'
            name='fileInput'
            id='fileInput'
            className={styles['file-input']}
            accept='image/*'
            onChange={handleFileChange}
          />
        </>
      ) : (
        <>
          <ReflectionVisionBoard images={images} />
          <label
            htmlFor='fileInput'
            className={styles['file-input-label']}
            aria-label='이미지 첨부'
          ></label>
          <input
            type='file'
            name='fileInput'
            id='fileInput'
            className={styles['file-input']}
            accept='image/*'
            onChange={handleFileChange}
          />
        </>
      )}
    </section>
  );
}

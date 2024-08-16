import React from 'react';
import BookItem from './BookItem';

function BookDisplay() {
    const books = [
        { id: 1, title: 'It Ends with Us', author: 'Colleen Hoover', image: 'https://www.interviewbit.com/blog/wp-content/uploads/2022/02/Introduction-to-Algorithms.jpg' },
        { id: 2, title: 'The Shining', author: 'Stephen King', image: 'https://www.interviewbit.com/blog/wp-content/uploads/2022/02/Data-Structures-And-Algorithms-Made-Easy.jpg' },
        { id: 3, title: 'The Book Thief', author: 'Markus Zusak', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkNuyhJmdNMZmq6DJFG4i-u7l8OoZgf8PRYkkyWz0nu7gO_nBN' },
        { id: 4, title: 'The God of Small Things', author: 'Arundhati Roy', image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIqkjYLdM2AKRNodnVtB8Zo883nn8A1MsYoqjnpEeG9LkDkeqI' },
        { id: 5, title: 'The Invisible Life of Addie LaRue', author: 'V. E. Schwab', image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTpeAw2L5OSyRzx6rDG4zRFImhU9crOT5JI_GpCIxx9dr1BtU__' },
        { id: 6, title: 'The Master and Margarita', author: 'Mikhail Bulgakov', image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSUkG6syYyKPtnB6PtoWyxiDF2AonlZXJZfl4sPFgx914P_vTvy' },
        { id: 7, title: 'It Ends with Us', author: 'Colleen Hoover', image: 'https://www.interviewbit.com/blog/wp-content/uploads/2022/02/Introduction-to-Algorithms.jpg' },
        { id: 8, title: 'The Shining', author: 'Stephen King', image: 'https://www.interviewbit.com/blog/wp-content/uploads/2022/02/Data-Structures-And-Algorithms-Made-Easy.jpg' },
        { id: 9, title: 'The Book Thief', author: 'Markus Zusak', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkNuyhJmdNMZmq6DJFG4i-u7l8OoZgf8PRYkkyWz0nu7gO_nBN' },
        { id: 10, title: 'The God of Small Things', author: 'Arundhati Roy', image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIqkjYLdM2AKRNodnVtB8Zo883nn8A1MsYoqjnpEeG9LkDkeqI' },
        { id: 11, title: 'The Invisible Life of Addie LaRue', author: 'V. E. Schwab', image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTpeAw2L5OSyRzx6rDG4zRFImhU9crOT5JI_GpCIxx9dr1BtU__' },
        { id: 12, title: 'It Ends with Us', author: 'Colleen Hoover', image: 'https://www.interviewbit.com/blog/wp-content/uploads/2022/02/Introduction-to-Algorithms.jpg' },
        { id: 13, title: 'The Shining', author: 'Stephen King', image: 'https://www.interviewbit.com/blog/wp-content/uploads/2022/02/Data-Structures-And-Algorithms-Made-Easy.jpg' },
        { id: 14, title: 'The Book Thief', author: 'Markus Zusak', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkNuyhJmdNMZmq6DJFG4i-u7l8OoZgf8PRYkkyWz0nu7gO_nBN' },
        { id: 15, title: 'The God of Small Things', author: 'Arundhati Roy', image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIqkjYLdM2AKRNodnVtB8Zo883nn8A1MsYoqjnpEeG9LkDkeqI' },
        { id: 16, title: 'The Invisible Life of Addie LaRue', author: 'V. E. Schwab', image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTpeAw2L5OSyRzx6rDG4zRFImhU9crOT5JI_GpCIxx9dr1BtU__' },
        { id: 17, title: 'The Master and Margarita', author: 'Mikhail Bulgakov', image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSUkG6syYyKPtnB6PtoWyxiDF2AonlZXJZfl4sPFgx914P_vTvy' },
        { id: 18, title: 'It Ends with Us', author: 'Colleen Hoover', image: 'https://www.interviewbit.com/blog/wp-content/uploads/2022/02/Introduction-to-Algorithms.jpg' },
        { id: 19, title: 'The Shining', author: 'Stephen King', image: 'https://www.interviewbit.com/blog/wp-content/uploads/2022/02/Data-Structures-And-Algorithms-Made-Easy.jpg' },
        { id: 20, title: 'The Book Thief', author: 'Markus Zusak', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkNuyhJmdNMZmq6DJFG4i-u7l8OoZgf8PRYkkyWz0nu7gO_nBN' },
        { id: 21, title: 'The God of Small Things', author: 'Arundhati Roy', image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIqkjYLdM2AKRNodnVtB8Zo883nn8A1MsYoqjnpEeG9LkDkeqI' },
        { id: 22, title: 'The Invisible Life of Addie LaRue', author: 'V. E. Schwab', image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTpeAw2L5OSyRzx6rDG4zRFImhU9crOT5JI_GpCIxx9dr1BtU__' },
        { id: 23, title: 'It Ends with Us', author: 'Colleen Hoover', image: 'https://www.interviewbit.com/blog/wp-content/uploads/2022/02/Introduction-to-Algorithms.jpg' },
          ];
     
    return (
        <div className='back'>
        <div className="container">
            <h2>Books</h2>
            <div className='bdisp'>
            <div className="row">
                {books.map((book) => (
                    <div className="col-md-4" key={book.id}>
                        <BookItem book={book} />
                    </div>
                ))}
            </div>
            <style jsx>{`
                .container {
                    margin-top: 20px;
                }
                .row {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 20px;
                }
                .col-md-4 {
                    flex: 1 1 calc(33.333% - 20px);
                    box-sizing: border-box;
                }
            `}</style>
        </div>
        </div>
        </div>
    );
}

export default BookDisplay;

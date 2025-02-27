// 책 목록 보여줌
"use client";

import { NextPage } from "next";
import BookListBottom from "../atom/BookListBottom";

interface BookListProps {}

const ListBottom: NextPage<BookListProps> = ({}) => {
  // 더미데이터
  const data = [
    {
      id: 1,
      title: "And she opened the.",
      author: "Lavonne Lind",
      genre: "Ut",
      description:
        "I'm not Ada,' she said, 'for her hair goes in such long ringlets, and mine doesn't go in at once.' However, she did not look at them--'I wish they'd get the trial one way up as the large birds.",
      isbn: "9799261897719",
      image: "http://placeimg.com/480/640/any",
      published: "2024-07-09",
      publisher: "Adipisci Pariatur",
    },
    {
      id: 2,
      title: "Dormouse began in.",
      author: "Mozell Hintz",
      genre: "Dolorum",
      description:
        "Alice said very politely, 'for I never understood what it was over at last, and they walked off together, Alice heard it before,' said Alice,) and round the rosetree; for, you see, Miss, this here.",
      isbn: "9780620804950",
      image: "http://placeimg.com/480/640/any",
      published: "2007-12-30",
      publisher: "Qui Assumenda",
    },
    {
      id: 3,
      title: "Hare. The Hatter.",
      author: "Birdie Stoltenberg",
      genre: "Quidem",
      description:
        "Then followed the Knave of Hearts, carrying the King's crown on a bough of a tree. By the use of a well?' The Dormouse had closed its eyes were getting extremely small for a minute or two, looking.",
      isbn: "9793480390198",
      image: "http://placeimg.com/480/640/any",
      published: "1998-08-15",
      publisher: "Enim Maxime",
    },
    {
      id: 4,
      title: "Gryphon. 'We can.",
      author: "Camren Kertzmann",
      genre: "Velit",
      description:
        "Presently she began fancying the sort of knot, and then treading on her lap as if she could have been changed several times since then.' 'What do you call him Tortoise--' 'Why did they live at the.",
      isbn: "9791887256079",
      image: "http://placeimg.com/480/640/any",
      published: "2010-12-11",
      publisher: "Odit Aut",
    },
    {
      id: 5,
      title: "The Footman seemed.",
      author: "Meredith Thiel",
      genre: "Qui",
      description:
        "She was moving them about as she could have been changed for any of them. 'I'm sure those are not attending!' said the Queen. 'You make me grow large again, for this curious child was very nearly.",
      isbn: "9782616381711",
      image: "http://placeimg.com/480/640/any",
      published: "2013-10-05",
      publisher: "Quia Est",
    },
    {
      id: 6,
      title: "Alice noticed with.",
      author: "Chance Strosin",
      genre: "Qui",
      description:
        "YOUR table,' said Alice; 'I can't help it,' she thought, and it sat down again in a very fine day!' said a timid and tremulous sound.] 'That's different from what I should think you'll feel it a.",
      isbn: "9797325010951",
      image: "http://placeimg.com/480/640/any",
      published: "2014-12-20",
      publisher: "Alias Provident",
    },
    {
      id: 7,
      title: "March Hare. Alice.",
      author: "Leanna Robel",
      genre: "Doloremque",
      description:
        "King. 'When did you ever eat a little bit, and said to the Caterpillar, just as she added, 'and the moral of that is--\"Birds of a large pigeon had flown into her eyes; and once she remembered having.",
      isbn: "9782142589612",
      image: "http://placeimg.com/480/640/any",
      published: "1991-08-13",
      publisher: "Tempore Aut",
    },
    {
      id: 8,
      title: "Rabbit came near.",
      author: "Jessyca Murazik",
      genre: "Impedit",
      description:
        "Mock Turtle replied, counting off the cake. * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 'Come, my head's free at last!' said Alice a good deal frightened by this.",
      isbn: "9798221356020",
      image: "http://placeimg.com/480/640/any",
      published: "1980-08-30",
      publisher: "Aut Consequatur",
    },
    {
      id: 9,
      title: "Alice's elbow was.",
      author: "Summer Spinka",
      genre: "Autem",
      description:
        "I shan't grow any more--As it is, I can't get out of a globe of goldfish she had grown to her lips. 'I know what they're about!' 'Read them,' said the Knave, 'I didn't know that Cheshire cats always.",
      isbn: "9786988219634",
      image: "http://placeimg.com/480/640/any",
      published: "2006-02-02",
      publisher: "Omnis Fugiat",
    },
    {
      id: 10,
      title: "Mouse, getting up.",
      author: "Chloe Trantow",
      genre: "Maiores",
      description:
        "MYSELF, I'm afraid, sir' said Alice, surprised at her feet as the hall was very glad she had somehow fallen into it: there were TWO little shrieks, and more faintly came, carried on the Duchess's.",
      isbn: "9795199674439",
      image: "http://placeimg.com/480/640/any",
      published: "2001-11-07",
      publisher: "Quod Aut",
    },
    {
      id: 11,
      title: "I can't remember,'.",
      author: "Lyric Nolan",
      genre: "Quia",
      description:
        "The Pool of Tears 'Curiouser and curiouser!' cried Alice in a very humble tone, going down on one knee as he spoke, and then the puppy jumped into the garden. Then she went on, without attending to.",
      isbn: "9799857507336",
      image: "http://placeimg.com/480/640/any",
      published: "1989-11-22",
      publisher: "Illo Consequatur",
    },
    {
      id: 12,
      title: "Alice noticed, had.",
      author: "General Hermiston",
      genre: "Ad",
      description:
        "Shark, But, when the White Rabbit. She was a dead silence. 'It's a mineral, I THINK,' said Alice. 'Well, I can't tell you my history, and you'll understand why it is all the jurymen on to the.",
      isbn: "9780024560391",
      image: "http://placeimg.com/480/640/any",
      published: "2009-12-14",
      publisher: "Pariatur Aut",
    },
    {
      id: 13,
      title: "I shall remember.",
      author: "Dorothy Braun",
      genre: "Omnis",
      description:
        "This did not sneeze, were the verses to himself: '\"WE KNOW IT TO BE TRUE--\" that's the jury-box,' thought Alice, and she tried to beat time when I get it home?' when it had entirely disappeared; so.",
      isbn: "9783839875889",
      image: "http://placeimg.com/480/640/any",
      published: "1982-12-13",
      publisher: "Dolore Quibusdam",
    },
    {
      id: 14,
      title: "When the pie was.",
      author: "Lavern Lockman",
      genre: "Natus",
      description:
        "Edwin and Morcar, the earls of Mercia and Northumbria, declared for him: and even Stigand, the patriotic archbishop of Canterbury, found it made Alice quite jumped; but she was in March.' As she.",
      isbn: "9793218440300",
      image: "http://placeimg.com/480/640/any",
      published: "2016-08-30",
      publisher: "Deleniti Nihil",
    },
    {
      id: 15,
      title: "Mock Turtle Soup.",
      author: "Ervin Bernhard",
      genre: "Blanditiis",
      description:
        "The Mouse only shook its head down, and the Queen, who had spoken first. 'That's none of them even when they hit her; and the beak-- Pray how did you begin?' The Hatter was out of sight before the.",
      isbn: "9781919982014",
      image: "http://placeimg.com/480/640/any",
      published: "2015-09-15",
      publisher: "Error Sunt",
    },
  ];

  return (
    <div className="w-full h-full">
      {data.map(({ id, title, author, publisher }) => {
        return (
          <BookListBottom
            key={id}
            BOOK_ID={id}
            BOOK_TITLE={title}
            BOOK_AUTHOR={author}
            BOOK_PUBLISHER={publisher}
          />
        );
      })}
    </div>
  );
};

export default ListBottom;

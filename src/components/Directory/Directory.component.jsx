import DirectoryItem from '../Directory-item/Directory-item.component';

import './Directory.styles.scss';

const Directory = ({categories}) => {
    return (
        <div className='directory-container'>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}   
    </div>
    )
}

export default Directory
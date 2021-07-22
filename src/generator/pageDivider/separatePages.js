import ElementSizes from './ElementSizes';

const MAX_SIZE = 820;

export default (lines) =>
{
    let pageSize = 0;
    const pages = [[]];

    for(const line of lines)
    {
        const size = calculateSize(line);
        pageSize += size;
        if(pageSize > MAX_SIZE)
        {
            pageSize = size;
            pages.push([{...line, size }]);
        }
        else
        {
            pages[pages.length-1].push({...line, size});
        }
    }

    return pages;

}

const calculateSize = line => ElementSizes[line.type](line.content);
function getRange(start, end) {
    return [...Array(end).keys()].map(el => el + start)
}

function PaginationItem({page, currentPage, onPageChange}) {
    return (
        <li className={`page-item ${page === currentPage && "active"}`} onClick={() => onPageChange(page)}>
            <span className="page-link">{page}</span>
        </li>
    )
}

function Pagination({currentPage, total, limit, onPageChange}) {
    const pagesCount = Math.ceil(total / limit)
    const pages = getRange(1, pagesCount)
    return (
            <ul className="pagination">
                {pages.map(page => (
                    <PaginationItem 
                        page={page}
                        key={page}
                        currentPage={currentPage}
                        onPageChange={onPageChange}
                    />
                ))}
            </ul>
    )
}

export default Pagination
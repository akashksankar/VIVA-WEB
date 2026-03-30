const database = {
    mysql: [
        {
            category: "1. Table Creation & Record Insertion",
            questions: [
                { q: "What is MySQL and how is it different from other DBMS?", a: "MySQL is an open-source Relational Database Management System (RDBMS) that uses Structured Query Language (SQL). It organizes data into tables with rigid schemas, unlike NoSQL systems (like MongoDB) that use flexible, document-based storage." },
                { q: "What is a table in MySQL?", a: "A table is a structured collection of data organized into rows (records) and columns (attributes)." },
                { q: "What are the different data types used in MySQL?", a: "Common data types include numeric (INT, DECIMAL), string (VARCHAR, CHAR, TEXT), date/time (DATE, DATETIME, TIMESTAMP), and boolean." },
                { q: "What is the syntax for creating a table?", a: "<code>CREATE TABLE table_name (column_name datatype constraints, ...);</code>" },
                { q: "What is a PRIMARY KEY? Why is it important?", a: "A Primary Key is a column or set of columns that uniquely identifies a row. It is essential for enforcing entity integrity, preventing duplicate records, and optimizing lookups via automatic indexing." },
                { q: "What is the difference between PRIMARY KEY and UNIQUE KEY?", a: "A Primary Key cannot contain NULL values and a table can only have ONE. A Unique Key ensures uniqueness but allows a single NULL value, and a table can have MULTIPLE Unique Keys." },
                { q: "How do you insert data into a table?", a: "<code>INSERT INTO table_name (col1, col2) VALUES (val1, val2);</code>" },
                { q: "What is the difference between INSERT INTO and INSERT INTO ... VALUES?", a: "If you omit column specifications (<code>INSERT INTO table VALUES(...)</code>), you must provide values for EVERY column in the exact order they were created. Specifying columns allows you to insert partial data safely." }
            ]
        },
        {
            category: "2. Stored Procedures",
            questions: [
                { q: "What is a stored procedure?", a: "A stored procedure is a prepared SQL code that you can save and reuse over and over again, stored directly on the database server." },
                { q: "Why do we use stored procedures?", a: "They improve performance (compiled once), reduce network traffic (send a single call instead of multiple queries), and enhance security (encapsulate logic and prevent SQL injection)." },
                { q: "What is the syntax for creating a stored procedure?", a: "<code>CREATE PROCEDURE procedure_name() BEGIN ... SQL statements ... END;</code>" },
                { q: "What is the role of DELIMITER in MySQL?", a: "The DELIMITER command changes the standard statement terminator (;) to another character (like // or $$) temporarily, so MySQL doesn't cut off the procedure definition at the first internal semicolon." },
                { q: "What are IN, OUT, and INOUT parameters?", a: "IN passes a value to the procedure. OUT returns a value from the procedure. INOUT passes a value, allows the procedure to modify it, and returns the modified value." },
                { q: "How do you call a stored procedure?", a: "<code>CALL procedure_name(parameter_values);</code>" },
                { q: "What are the advantages of stored procedures?", a: "Better performance, code reusability, modular programming, enhanced security/permissions, and reduced network latency." }
            ]
        },
        {
            category: "3. Nested Queries & Subqueries",
            questions: [
                { q: "What is a subquery?", a: "A subquery (or nested query) is a query within another SQL query, embedded within the WHERE, HAVING, or FROM clause." },
                { q: "What is the difference between a subquery and a join?", a: "A JOIN merges columns from multiple tables into a single result set. A subquery typically filters data or calculates a single value/list to be used by the outer query. Joins are generally faster." },
                { q: "Where can subqueries be used?", a: "They can be used in SELECT, INSERT, UPDATE, and DELETE statements, usually inside WHERE, HAVING, or FROM clauses." },
                { q: "What is a correlated subquery?", a: "A subquery that relies on data from the outer query. It evaluates once for every row processed by the outer query, making it slower than regular subqueries." },
                { q: "What is average-based filtering using subqueries?", a: "Filtering records by comparing them against an aggregate avg calculated within a subquery. Example: <code>WHERE salary > (SELECT AVG(salary) FROM employees)</code>." },
                { q: "How do you compare a value with a group average?", a: "Use a subquery in the WHERE clause: <code>WHERE marks > (SELECT AVG(marks) FROM students)</code>." },
                { q: "Can subqueries return multiple rows?", a: "Yes. Use operators like IN, ANY, or ALL to handle multiple values returned by a subquery." }
            ]
        },
        {
            category: "4. Views & Conditional Views",
            questions: [
                { q: "What is a view in MySQL?", a: "A view is a virtual table based on the result-set of an SQL statement. It contains rows and columns just like a real table, but the stored structure is merely a query." },
                { q: "Why do we use views?", a: "For security (hiding sensitive columns), simplifying complex queries, and ensuring backward compatibility if table schemas change." },
                { q: "What is a conditional view?", a: "A view created with a specifically filtered subset of data using a WHERE condition. Example: <code>CREATE VIEW active_users AS SELECT * FROM users WHERE status='active';</code>" },
                { q: "How do you create a view using a subquery?", a: "<code>CREATE VIEW Top_Students AS SELECT * FROM students WHERE marks > (SELECT AVG(marks) FROM students);</code>" },
                { q: "What are the advantages of views?", a: "Simplicity, security (restricting data access), consistency, and logical data independence." },
                { q: "Can we update data through a view?", a: "Yes, but only if the view meets certain conditions (e.g., no JOINs, GROUP BY, DISTINCT, or aggregate functions). These are known as Updatable Views." }
            ]
        },
        {
            category: "5. Joins & Relational Tables",
            questions: [
                { q: "What is a relational database?", a: "A database structured to recognize relations among stored items of information using a tabular format consisting of rows and columns (tables)." },
                { q: "What is a foreign key?", a: "A column or group of columns in a relational table that provides a link between data in two tables. It acts as a cross-reference between tables referencing the Primary Key of another table." },
                { q: "What are joins in MySQL?", a: "JOIN clauses are used to combine rows from two or more tables, based on a related column between them." },
                { q: "Types of joins (INNER, LEFT, RIGHT, FULL)?", a: "INNER: Returns matching rows in both tables. LEFT: Returns all rows from left table, and matching rows from right. RIGHT: All right table rows, plus matching left rows. FULL: Returns all rows when there is a match in either table (MySQL simulates this with a UNION of Left and Right)." },
                { q: "Difference between INNER JOIN and LEFT JOIN?", a: "INNER JOIN excludes rows that don't match. LEFT JOIN includes all rows from the primary (left) table, even if there are no matches, populating right-table columns with NULL." },
                { q: "What happens if there is no matching record in a join?", a: "In an INNER JOIN, the row is discarded. In a LEFT JOIN, the row is kept with NULLs for the missing joined data." }
            ]
        },
        {
            category: "6. Triggers",
            questions: [
                { q: "What is a trigger?", a: "A trigger is a set of SQL statements automatically executed (fired) in response to a specific event on a particular table or view (INSERT, UPDATE, or DELETE)." },
                { q: "When are triggers executed?", a: "They are executed automatically BEFORE or AFTER an INSERT, UPDATE, or DELETE event occurs." },
                { q: "Types of triggers (BEFORE, AFTER)?", a: "BEFORE triggers execute right before the statement finishes processing (good for validation). AFTER triggers execute directly after the action (useful for logging or cascading changes in other tables)." },
                { q: "What is the purpose of triggers in logging updates?", a: "Triggers can automatically insert a record into an audit or history table every time data is updated or deleted, ensuring flawless auditing." },
                { q: "What is OLD and NEW in triggers?", a: "<code>OLD</code> refers to the row values before the event (used in UPDATE/DELETE). <code>NEW</code> refers to the row values after the event (used in INSERT/UPDATE)." },
                { q: "Can we have multiple triggers on a table?", a: "Yes, MySQL allows multiple triggers for the same event and action time per table (though execution order depends on creation unless explicitly defined)." }
            ]
        },
        {
            category: "7. Average-Based Queries",
            questions: [
                { q: "How do you calculate average using SQL?", a: "Using the <code>AVG()</code> aggregate function. Example: <code>SELECT AVG(column_name) FROM table;</code>" },
                { q: "What is the use of AVG() function?", a: "It computes the mathematical mean of a numeric column, ignoring NULL values." },
                { q: "How do you filter records above average?", a: "You cannot use aggregates directly in WHERE. You must use a subquery: <code>WHERE value > (SELECT AVG(value) FROM table)</code>." },
                { q: "Write a query to find students scoring above average marks.", a: "<code>SELECT name, marks FROM students WHERE marks > (SELECT AVG(marks) FROM students);</code>" },
                { q: "What is GROUP BY used for?", a: "It groups rows that have the same values into summary rows (e.g., calculating average salary per department)." },
                { q: "Difference between WHERE and HAVING?", a: "<code>WHERE</code> filters rows before aggregation. <code>HAVING</code> filters group results after aggregation is performed (often used with GROUP BY and aggregate functions)." }
            ]
        }
    ],
    mongodb: [
        {
            category: "1. Basics & Embedded Documents",
            questions: [
                { q: "What is MongoDB?", a: "MongoDB is a widely used open-source NoSQL database that stores data in flexible, JSON-like document formats (BSON)." },
                { q: "Difference between SQL and NoSQL?", a: "SQL uses structured, rigid tables, relies on complex joins, and scales vertically. NoSQL uses flexible documents, avoids joins through denormalization/embedding, and is designed to scale horizontally easily." },
                { q: "What is a document in MongoDB?", a: "A document is the basic unit of data in MongoDB, equivalent to a row in SQL. It is composed of field-value pairs." },
                { q: "What are embedded documents?", a: "It is the practice of storing related data within a single document as a sub-document or array, rather than storing them in separate tables with foreign keys." },
                { q: "Advantages of embedded documents?", a: "Drastically improves read performance since you can retrieve all related data in a single database operation (no slow joins required)." }
            ]
        },
        {
            category: "2. Updates ($set, $inc)",
            questions: [
                { q: "What is the $set operator?", a: "<code>$set</code> replaces the value of a field with the specified value, or creates the field if it doesn't currently exist." },
                { q: "What is the $inc operator?", a: "<code>$inc</code> increments a numerical field by a specified amount (can be positive or negative)." },
                { q: "Difference between $set and $inc?", a: "$set explicitly overwrites a value. $inc dynamically adds/subtracts from an existing numerical value without needing to know its current state." },
                { q: "How do you update a specific field?", a: "<code>db.collection.updateOne({_id: 1}, {$set: {status: 'active'}})</code>" },
                { q: "Can multiple fields be updated at once?", a: "Yes, you can combine operators inside a single update document: <code>{$set: {name: 'John'}, $inc: {age: 1}}</code>." }
            ]
        },
        {
            category: "3. Conditional Retrieval",
            questions: [
                { q: "How do you retrieve documents based on conditions?", a: "By passing a query document inside the find() method. Example: <code>db.users.find({age: 25})</code>." },
                { q: "What is find() method?", a: "The method used to select documents in a collection and return a cursor to the selected documents." },
                { q: "What are comparison operators in MongoDB?", a: "Operators used to map advanced mathematical matching: <code>$eq</code> (equal), <code>$gt</code> (greater than), <code>$gte</code> (greater than or eq), <code>$lt</code> (less than), <code>$lte</code> (less than or eq), and <code>$ne</code> (not equal)." },
                { q: "How do you filter data using conditions?", a: "<code>db.inventory.find({ qty: { $gt: 20 } })</code> fetches all items where quantity is strictly greater than 20." },
                { q: "How do you sort documents?", a: "By chaining the <code>.sort()</code> method to a cursor. Example: <code>db.users.find().sort({age: 1})</code> (1 is ascending, -1 is descending)." }
            ]
        },
        {
            category: "4. Aggregation ($group)",
            questions: [
                { q: "What is aggregation in MongoDB?", a: "Operations that process data records and return computed results. It groups values from multiple documents and performs operations (like sum/avg) on grouped data." },
                { q: "What is the $group stage?", a: "An aggregation stage that separates documents into groups according to a specified `_id` expression and outputs a document for each distinct grouping." },
                { q: "How do you calculate total or average using aggregation?", a: "<code>db.sales.aggregate([ { $group: { _id: '$item', totalAmount: { $sum: '$price' }, avgAmt: { $avg: '$price' } } } ])</code>" },
                { q: "Difference between aggregation and normal queries?", a: "Normal queries (find) just return existing documents. Aggregations actively compute, transform, map, aggregate, and reshape the data entirely." },
                { q: "What is pipeline in aggregation?", a: "A sequence of logical stages (like $match, $group, $sort, $project) that documents sequentially pass through for transformation." }
            ]
        },
        {
            category: "5. Filtering & Sorting",
            questions: [
                { q: "How does sorting work in MongoDB?", a: "Sorting is applied via the <code>.sort()</code> method attached to a find cursor, passing an object defining the keys to sort by." },
                { q: "What is the syntax for sorting documents?", a: "<code>db.collection.find().sort({ field_name: 1 })</code>" },
                { q: "Difference between ascending and descending order?", a: "Ascending sorts A-Z or lowest-to-highest (1). Descending sorts Z-A or highest-to-lowest (-1)." },
                { q: "Can filtering and sorting be combined?", a: "Yes, you easily chain them: <code>db.users.find({status: 'active'}).sort({age: -1})</code>." }
            ]
        }
    ],
    advanced: [
        {
            category: "🎯 Advanced / Mixed Questions (High Viva Value)",
            questions: [
                { q: "Difference between MySQL and MongoDB?", a: "MySQL is highly structured (Tables/Rows), requires schemas, supports complex ACID compliant JOINs, and scales vertically. MongoDB is unstructured (Collections/JSON Documents), schema-less, avoids JOINs via document embedding, and scales horizontally natively via sharding." },
                { q: "When would you choose MongoDB over MySQL?", a: "When your schema is constantly evolving, you have a massive volume of unstructured data, you need immense horizontal write scalability, or your app naturally uses JSON data models (like Node.js apps)." },
                { q: "Explain normalization vs denormalization.", a: "Normalization (SQL focus) breaks data into multiple tables to eliminate redundancy and prevent data anomalies. Denormalization (NoSQL focus) merges related data into a single nested document to speed up read operations at the cost of duplicate data storage." },
                { q: "What is indexing in MySQL and MongoDB?", a: "In both, Indexes are special data structures that store a small portion of the data set in an easy to traverse form. It dramatically speeds up data retrieval. Without indexes, databases must do slow 'full/collection scans'." },
                { q: "How do triggers differ from stored procedures?", a: "Triggers run automatically responding to an event (INSERT/UPDATE/DELETE). Stored Procedures are independent logic that must be explicitly executed using <code>CALL</code>." },
                { q: "What is performance impact of subqueries vs joins?", a: "JOINs are generally heavily optimized by query engines and are faster, mapping direct indexes. Subqueries often spawn hidden temporary tables behind the scenes, and correlated subqueries can be terribly slow (O(N^2) complexity)." },
                { q: "Explain real-world use case of aggregation.", a: "An analytics dashboard computing the total monthly revenue per geographic region from raw sales transaction documents, then parsing it out chronologically." },
                { q: "How do you handle large datasets in MongoDB?", a: "By using Sharding (horizontally partitioning data across multiple servers), aggressive proper Indexing, and utilizing the Aggregation Framework efficiently to aggregate data close to the disk rather than in application memory." }
            ]
        }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    const qnaContainer = document.getElementById('qna-container');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const searchInput = document.getElementById('searchInput');
    const noResults = document.getElementById('no-results');
    
    let currentTab = 'mysql';

    function renderQuestions(tabId, searchTerm = '') {
        qnaContainer.innerHTML = '';
        
        const data = database[tabId];
        if (!data) return;

        let hasResults = false;
        
        // Slight delay to mimic smooth transition, or we just rely on CSS
        
        data.forEach((group, groupIndex) => {
            // Filter questions by search
            const filteredQuestions = group.questions.filter(item => {
                const text = (item.q + " " + item.a).toLowerCase();
                return text.includes(searchTerm.toLowerCase());
            });

            if (filteredQuestions.length === 0) return;
            hasResults = true;

            // Create Category wrapper
            const categoryEl = document.createElement('div');
            categoryEl.className = 'category-group';
            categoryEl.style.animationDelay = `${groupIndex * 0.1}s`;

            const titleEl = document.createElement('h2');
            titleEl.className = 'category-title';
            titleEl.textContent = group.category;
            categoryEl.appendChild(titleEl);

            // Add questions
            filteredQuestions.forEach((item, qIndex) => {
                const accordionItem = document.createElement('div');
                accordionItem.className = 'accordion-item';
                accordionItem.setAttribute('data-type', tabId);

                const header = document.createElement('button');
                header.className = 'accordion-header';
                
                const qText = document.createElement('span');
                qText.innerHTML = highlight(item.q, searchTerm);
                
                const icon = document.createElement('i');
                icon.className = 'fa-solid fa-chevron-down accordion-icon';

                header.appendChild(qText);
                header.appendChild(icon);

                const content = document.createElement('div');
                content.className = 'accordion-content';
                
                const inner = document.createElement('div');
                inner.className = 'answer-inner';
                inner.innerHTML = highlightHTMLSafe(item.a, searchTerm);
                
                content.appendChild(inner);
                accordionItem.appendChild(header);
                accordionItem.appendChild(content);

                // Add Toggle Logic
                header.addEventListener('click', () => {
                    const isActive = accordionItem.classList.contains('active');
                    
                    // Close all others in this category (optional UX choice)
                    // document.querySelectorAll('.accordion-item').forEach(el => {
                    //     el.classList.remove('active');
                    //     el.querySelector('.accordion-content').style.maxHeight = null;
                    // });

                    if (isActive) {
                        accordionItem.classList.remove('active');
                        content.style.maxHeight = null;
                    } else {
                        accordionItem.classList.add('active');
                        content.style.maxHeight = content.scrollHeight + "px";
                    }
                });

                categoryEl.appendChild(accordionItem);
            });

            qnaContainer.appendChild(categoryEl);
        });

        if (!hasResults) {
            noResults.classList.remove('hidden');
        } else {
            noResults.classList.add('hidden');
        }
    }

    // A simple text highlighter
    function highlight(text, term) {
        if (!term) return text;
        const regex = new RegExp(`(${term})`, "gi");
        return text.replace(regex, `<mark style="background: rgba(59, 130, 246, 0.4); color: white; border-radius:3px; padding: 0 2px;">$1</mark>`);
    }

    // Highlight that doesn't break inner HTML tags
    function highlightHTMLSafe(htmlStr, term) {
        if (!term) return htmlStr;
        // Simple heuristic: strip tags, highlight, and hope for the best, 
        // OR better: just highlight outside of tags using negative lookahead
        const regex = new RegExp(`(${term})(?![^<]*>)`, "gi");
        return htmlStr.replace(regex, `<mark style="background: rgba(59, 130, 246, 0.4); color: white; border-radius:3px; padding: 0 2px;">$1</mark>`);
    }

    // Event Listeners
    tabBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            tabBtns.forEach(b => b.classList.remove('active'));
            const target = e.currentTarget;
            target.classList.add('active');
            
            currentTab = target.getAttribute('data-tab');
            renderQuestions(currentTab, searchInput.value);
            
            // Re-trigger animate
            qnaContainer.style.opacity = 0;
            setTimeout(() => {
                qnaContainer.style.opacity = 1;
                qnaContainer.style.transition = 'opacity 0.3s';
            }, 50);
        });
    });

    searchInput.addEventListener('input', (e) => {
        renderQuestions(currentTab, e.target.value);
    });

    // Initial Render
    renderQuestions('mysql');
});

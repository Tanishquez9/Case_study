/*DDL */
use CaseStudy;
create table Users (
CustomerId int NOT NULL IDENTITY(1,1) PRIMARY KEY,
UserName varchar(255) NOT NULL,
Date_of_Birth DATE,
Address_Line varchar(255),
City varchar(255),
Pincode int,
Mobile VARCHAR(14) NOT NULL UNIQUE,
);

/*DML*/
INSERT INTO Users VALUES('Utkarsh','2012-2-21','thane','Thane',400607,83484738);
INSERT INTO Users VALUES('Prerna','2012-2-20','thane','Thane',400607,83484731);
INSERT INTO Users VALUES('Tanishque','2012-2-20','thane','Thane',400607,83484732);
INSERT INTO Users VALUES('Bharadwaj','2012-2-21','thane','Thane',400607,83484733);
Select * FROM Users;
DELETE FROM Users WHERE UserName='Utkarsh';
UPDATE Users 
SET Mobile=83684837 WHERE UserName='Tanishque';
Select * FROM Users;

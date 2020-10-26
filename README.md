# HolyFlush
A Node.JS script for renaming all directories and files in the directory structure in an incremental manner.

## Requirements
-  A folder structure to purge.
-  Docker installed.

## Clone the project 
`git clone https://github.com/hadrienmarquez/HolyFlush.git`

## `HOLYPATH`

First, set a local environment `HOLYPATH=/PATH/TO/YOUR/FOLDER/`

The environment variable `HOLYPATH` might be problematic when using WSL2 as the windows path won't work. You'll have to use the WSL2 path to your data i.e `D:\my\data` becomes `/mnt/d/my/data`.

## Launch the command

Once this is done, launch the script with : 
`docker-compose run --rm holyflush`

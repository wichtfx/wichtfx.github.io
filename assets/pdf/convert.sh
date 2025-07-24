#!/bin/bash
for file in *.pdf; do
  gs -dSAFER -dBATCH -dNOPAUSE -dQUIET \
     -dFirstPage=1 -dLastPage=1 \
     -sDEVICE=png16m -r300 \
     -dBackgroundColor=16#FFFFFF \
     -sOutputFile="${file%.pdf}.png" "$file"
done
